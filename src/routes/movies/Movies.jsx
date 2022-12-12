import { useState, useEffect } from "react";
import Api from "../../service/api";
import MovieCard from "../../components/movieCard/MovieCard";
import "./movies.css";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState(window.location.hash.slice(1, window.location.hash.length) || "popular");

    const [options, setOptions] = useState([
        { value: "popular", label: "Populares" },
        { value: "top_rated", label: "Mejor Valoradas" },
        { value: "upcoming", label: "Proximamente" },
    ]);

    // Change movies on category and sort options
    useEffect(() => {
        switch (category) {
            case "popular":
                Api.getPopular("movie").then((data) => setMovies(data.results));
                break;
            case "top_rated":
                Api.getTop("movie").then((data) => setMovies(data.results));
                sortOptions(category);
                break;
            case "upcoming":
                Api.getUpcoming("movie").then((data) => setMovies(data.results));
                sortOptions(category);
                break;
            default:
                setCategory("popular"); // In case of any random hash
        }
    }, [category]);

    // Change category and hash on select change
    const handleSelectChange = (e) => {
        setCategory(e.target.value);
        window.location.hash = "#" + e.target.value;
    };

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
                    <div className="category-select">
                        <select onChange={(e) => handleSelectChange(e)} defaultValue={category}>
                            {options.map((o) => (
                                <option key={o.value} value={o.value}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                {movies.map((m) => (
                    <div className="col-6 col-sm-3 col-xl-2 p-2" key={m.id}>
                        <MovieCard element={m} type={"movies"} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Movies;
