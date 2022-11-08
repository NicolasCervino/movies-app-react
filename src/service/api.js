import axios from "axios";

const apiKey = "f3b242b5857fe6135b2f4c0420e0ba0b";

const getPopularMovies = async () => {
    // Obtiene las peliculas populares de la base de datos
    return await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ARG`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getPopularShows = async () => {
    // Obtiene las peliculas populares de la base de datos
    return await axios
        .get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es-ARG`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const Api = {
    getPopularMovies,
    getPopularShows,
};

export default Api;
