import { useState, useEffect } from "react";
import MovieSwiper from "../swiper/MovieSwiper";
import Api from "../../service/api";
import { useAuth } from "../../context/AuthContext";
import { useMyList } from "../../context/ListContext";
import { useTranslation } from "react-i18next";


const MovieSwipers = () => {
    const [popularMovies, setPopularMovies] = useState(null);
    const [topMovies, setTopMovies] = useState(null);
    const { user } = useAuth();
    const { moviesList } = useMyList();

    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        Api.getPopular("movie", 1, i18n.language)
            .then((data) => {
                setPopularMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, [i18n.language]);

    useEffect(() => {
        Api.getTop("movie", 1, i18n.language)
            .then((data) => {
                setTopMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, [i18n.language]);

    const handleMoviesList = () => {
        if (moviesList.length >= 10) {
            return moviesList.slice(0, 10);
        } else {
            return moviesList;
        }
    };

    return (
        <div className="row px-2">
            {user && moviesList.length > 0 && (
                <div className="col-12 justify-content-center p-2">
                    <h3 className="text-white text-uppercase">{t("movie-swipers.my-list")}</h3>
                    <MovieSwiper elements={handleMoviesList()} type="movie" wide={true} bigList={moviesList.length >= 10}></MovieSwiper>
                </div>
            )}

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">{t("movie-swipers.populars")}</h3>
                <MovieSwiper elements={popularMovies} type="movie" category={"popular"}></MovieSwiper>
            </div>

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">{t("movie-swipers.top-rated")}</h3>
                <MovieSwiper elements={topMovies} type="movie" category={"top_rated"}></MovieSwiper>
            </div>
        </div>
    );
};

export default MovieSwipers;
