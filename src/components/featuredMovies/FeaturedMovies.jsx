import { useState, useEffect } from "react";
import Api from "../../service/api";
import MainCarrousel from "../carrousel/mainCarrousel/MainCarrousel";

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Api.getPopularMovies()
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return <MainCarrousel movies={movies} size={5}></MainCarrousel>;
};

export default FeaturedMovies;
