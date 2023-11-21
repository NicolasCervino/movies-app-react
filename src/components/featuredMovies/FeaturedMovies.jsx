import { useState, useEffect } from "react";
import Api from "../../service/api";
import LoadingCarrousel from "../loaders/loadingCarrousel/LoadingCarrousel";
import MainCarrousel from "../carrousel/mainCarrousel/MainCarrousel";
import useRandomPage from "../../hooks/useRandomPage";
import { useTranslation } from "react-i18next";

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const page = useRandomPage("popular", "movie");
    const { i18n } = useTranslation();

    useEffect(() => {
        setLoading(true);
        Api.getPopular("movie", page, i18n.language)
            .then((data) => {
                const movies = data.results.filter((m) => m.backdrop_path !== null && m.overview !== "");
                setMovies(movies);
            })
            .catch((error) => console.log(error))
            .finally(setTimeout(() => setLoading(false), 1000));
    }, [page, i18n.language]);

    return loading ? <LoadingCarrousel /> : <MainCarrousel movies={movies} type={"movie"} size={5} />;
};

export default FeaturedMovies;
