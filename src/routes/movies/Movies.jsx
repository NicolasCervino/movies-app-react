import { useState, useEffect } from "react";
import Api from "../../service/api";
import CategorySelector from "../../components/categorySelector/CategorySelector";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState(window.location.hash.slice(1, window.location.hash.length) || "popular");
    
    const [t, i18n] = useTranslation("global")

    const [options, setOptions] = useState([
        { value: "popular", label: t("movies.popular") },
        { value: "top_rated", label: t("movies.top-rated") },
        { value: "upcoming", label: t("movies.upcoming") },
    ]);

    const [totalPages, setTotalPages] = useState();

    // Change first movies on category and sort options
    useEffect(() => {
        switch (category) {
            case "popular":
                Api.getPopular("movie", 1, i18n.language).then((data) => {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                });
                break;
            case "top_rated":
                Api.getTop("movie", 1, i18n.language).then((data) => {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                });
                sortOptions(category);
                break;
            case "upcoming":
                Api.getUpcoming(1, i18n.language).then((data) => {
                    setMovies(data.results);
                    setTotalPages(data.total_pages);
                });
                sortOptions(category);
                break;
            default:
                setCategory("popular"); // In case of any random hash
        }
    }, [category, i18n.language]);

    // Puts current value as first option
    const sortOptions = (currentValue) => {
        let newOptions = [options.find((o) => o.value === currentValue)];
        newOptions.push(...options.filter((o) => o.value !== currentValue));
        setOptions(newOptions);
    };

    return (
        <>
            <Helmet>
                <title>MoviesApp | {t("movies.header-title")}</title>
            </Helmet>
            <div className="row">
                <div className="col-12 category-selector py-3 px-2 justify-content-center justify-content-sm-start">
                    <CategorySelector options={options} category={category} setCategory={setCategory} />
                </div>
            </div>
            <div className="row">
                <InfiniteCardScroll
                    elements={movies}
                    setElements={setMovies}
                    type={["movie", "category", category]}
                    totalPages={totalPages}
                />
            </div>
            <Outlet />
        </>
    );
};

export default Movies;
