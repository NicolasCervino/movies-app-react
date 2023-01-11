import { useState, useEffect } from "react";
import Api from "../../service/api";
import LoadingCarrousel from "../loaders/loadingCarrousel/LoadingCarrousel";
import MainCarrousel from "../carrousel/mainCarrousel/MainCarrousel";
import useRandomPage from "../../hooks/useRandomPage";

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const page = useRandomPage("popular", "movie");

    useEffect(() => {
        setLoading(true);
        Api.getPopular("movie", page)
            .then((data) => {
                const movies = data.results.filter((m) => m.backdrop_path !== null && m.overview !== "");
                setMovies(movies);
            })
            .catch((error) => console.log(error))
            .finally(setTimeout(() => setLoading(false), 1000));
    }, [page]);

    return loading ? <LoadingCarrousel /> : <MainCarrousel movies={movies} type={"movie"} size={5} />;
};

export default FeaturedMovies;
