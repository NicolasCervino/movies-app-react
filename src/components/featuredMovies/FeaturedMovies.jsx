import { useState, useEffect } from "react";
import Api from "../../service/api";
import LoadingCarrousel from "../loaders/loadingCarrousel/LoadingCarrousel";
import MainCarrousel from "../carrousel/mainCarrousel/MainCarrousel";

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Api.getPopular("movie")
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.log(error))
            .finally(setTimeout(() => setLoading(false), 1000));
    }, []);

    return loading ? <LoadingCarrousel /> : <MainCarrousel movies={movies} type={"movies"} size={5} />;
};

export default FeaturedMovies;
