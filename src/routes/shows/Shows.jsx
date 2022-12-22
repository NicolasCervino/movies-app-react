import { useState, useEffect } from "react";
import Api from "../../service/api";
import MovieCard from "../../components/movieCard/MovieCard";
import CategorySelector from "../../components/categorySelector/CategorySelector";

const Shows = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState(window.location.hash.slice(1, window.location.hash.length) || "popular");

    const [options, setOptions] = useState([
        { value: "popular", label: "Populares" },
        { value: "top_rated", label: "Mejor Valoradas" },
        { value: "on_the_air", label: "En emision" },
    ]);

    // Change movies on category and sort options
    useEffect(() => {
        switch (category) {
            case "popular":
                Api.getPopular("tv").then((data) => setMovies(data.results));
                break;
            case "top_rated":
                Api.getTop("tv").then((data) => setMovies(data.results));
                sortOptions(category);
                break;
            case "on_the_air":
                Api.getAiring().then((data) => setMovies(data.results));
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
            <div className="row">
                <div className="col-12 category-selector py-3 px-2 justify-content-center justify-content-sm-start">
                    <CategorySelector options={options} category={category} setCategory={setCategory} />
                </div>
            </div>
            <div className="row">
                {movies.map((m) => (
                    <div className="col-6 col-sm-3 col-xl-2 p-2" key={m.id}>
                        <MovieCard element={m} type={"shows"} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Shows;
