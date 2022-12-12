import { useState, useEffect } from "react";
import Api from "../../service/api";
import MainCarrousel from "../carrousel/mainCarrousel/MainCarrousel";

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Api.getPopular("movie")
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return <MainCarrousel movies={movies} type={"movies"} size={5}></MainCarrousel>;
};

export default FeaturedMovies;
