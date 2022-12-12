import { useState, useEffect } from "react";
import MovieSwiper from "../swiper/MovieSwiper";
import Api from "../../service/api";

const MovieSwipers = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    const [topMovies, setTopMovies] = useState(null);

    useEffect(() => {
        Api.getPopular("movie")
            .then((data) => {
                setPopularMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        Api.getTop("movie")
            .then((data) => {
                setTopMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="row px-2">
            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Peliculas populares:</h3>
                <MovieSwiper elements={popularMovies} type="movies" category={"popular"}></MovieSwiper>
            </div>

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Mejor valoradas:</h3>
                <MovieSwiper elements={topMovies} type="movies" category={"top_rated"}></MovieSwiper>
            </div>
        </div>
    );
};

export default MovieSwipers;
