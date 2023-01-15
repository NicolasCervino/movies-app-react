import { useState, useEffect } from "react";
import Api from "../../service/api";
import CategorySelector from "../../components/categorySelector/CategorySelector";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Shows = () => {
    const [shows, setShows] = useState([]);
    const [category, setCategory] = useState(window.location.hash.slice(1, window.location.hash.length) || "popular");

    const [options, setOptions] = useState([
        { value: "popular", label: "Populares" },
        { value: "top_rated", label: "Mejor Valoradas" },
        { value: "on_the_air", label: "En emision" },
    ]);

    const [totalPages, setTotalPages] = useState();

    // Change movies on category and sort options
    useEffect(() => {
        switch (category) {
            case "popular":
                Api.getPopular("tv").then((data) => {
                    setShows(data.results);
                    setTotalPages(data.total_pages);
                });
                break;
            case "top_rated":
                Api.getTop("tv").then((data) => {
                    setShows(data.results);
                    setTotalPages(data.total_pages);
                });
                sortOptions(category);
                break;
            case "on_the_air":
                Api.getAiring().then((data) => {
                    setShows(data.results);
                    setTotalPages(data.total_pages);
                });
                sortOptions(category);
                break;
            default:
                setCategory("popular"); // In case of any random hash
        }
    }, [category]);

    // Puts current value as first option
    const sortOptions = (currentValue) => {
        let newOptions = [options.find((o) => o.value === currentValue)];
        newOptions.push(...options.filter((o) => o.value !== currentValue));
        setOptions(newOptions);
    };

    return (
        <>
            <Helmet>
                <title>MoviesApp | Series</title>
            </Helmet>
            <div className="row">
                <div className="col-12 category-selector py-3 px-2 justify-content-center justify-content-sm-start">
                    <CategorySelector options={options} category={category} setCategory={setCategory} />
                </div>
            </div>
            <div className="row">
                <InfiniteCardScroll elements={shows} setElements={setShows} type={["tv", "category", category]} totalPages={totalPages} />
            </div>
            <Outlet />
        </>
    );
};

export default Shows;
