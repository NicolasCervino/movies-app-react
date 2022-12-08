import axios from "axios";

const apiKey = "f3b242b5857fe6135b2f4c0420e0ba0b";

const getPopularMovies = async () => {
    return await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ARG`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getPopularShows = async () => {
    return await axios
        .get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es-ARG`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getMovieData = async (movieId) => {
    return await axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=es-ARG&append_to_response=credits`)
        .then((response) => {
            return response;
        });
};

const getTopMovies = async () => {
    return await axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=es-AR`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getTopShows = async () => {
    return await axios
        .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=es-AR`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const Api = {
    getPopularMovies,
    getPopularShows,
    getMovieData,
    getTopMovies,
    getTopShows,
};

export default Api;
