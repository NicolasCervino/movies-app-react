import { useState, useEffect } from "react";
import MovieSwiper from "../swiper/MovieSwiper";
import Api from "../../service/api";
import { useAuth } from "../../context/AuthContext";
import { useMyList } from "../../context/ListContext";

const MovieSwipers = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    const [topMovies, setTopMovies] = useState(null);
    const { user } = useAuth();
    const { moviesList } = useMyList();

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
            {user && moviesList.length > 0 && (
                <div className="col-12 justify-content-center p-2">
                    <h3 className="text-white text-uppercase">Peliculas en Mi lista:</h3>
                    <MovieSwiper elements={moviesList} type="movie"></MovieSwiper>
                </div>
            )}

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Peliculas populares:</h3>
                <MovieSwiper elements={popularMovies} type="movie" category={"popular"}></MovieSwiper>
            </div>

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Mejor valoradas:</h3>
                <MovieSwiper elements={topMovies} type="movie" category={"top_rated"}></MovieSwiper>
            </div>
        </div>
    );
};

export default MovieSwipers;
