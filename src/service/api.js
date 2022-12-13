import axios from "axios";

const apiKey = "f3b242b5857fe6135b2f4c0420e0ba0b";

const getPopular = async (type) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=es-AR`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getData = async (movieId, type) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${apiKey}&language=es-AR&append_to_response=credits,videos`)
        .then((response) => {
            return response;
        });
};

const getTop = async (type) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=es-AR`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

// Only works with Movies
const getUpcoming = async () => {
    return await axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=es-AR`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

// Only works with TV
const getAiring = async () => {
    return await axios
        .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=es-AR`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const Api = {
    getPopular,
    getData,
    getTop,
    getUpcoming,
    getAiring,
};

export default Api;
