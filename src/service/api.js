import axios from "axios";

const apiKey = "f3b242b5857fe6135b2f4c0420e0ba0b";

const getPopular = async (type, page) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=es-AR&page=${page}`)
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

const getTop = async (type, page) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=es-AR&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

// Only works with Movies
const getUpcoming = async (page) => {
    return await axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=es-AR&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

// Only works with TV
const getAiring = async (page) => {
    return await axios
        .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=es-AR&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getByCategory = async (category, type, page) => {
    switch (category) {
        case "popular":
            return await getPopular(type, page).then((data) => data);

        case "top_rated":
            return await getTop(type, page).then((data) => data);

        case "upcoming":
            return await getUpcoming(page).then((data) => {
                return data;
            });

        case "on_the_air":
            return await getAiring(page).then((data) => data);

        default:
            return await getPopular(type, page).then((data) => data);
    }
};

const getGenres = async (type) => {
    return await axios
        .get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=es-AR`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getByGenre = async (type, genreId, page) => {
    return await axios
        .get(`https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&language=es-ARG&with_genres=${genreId}&page=${page}`)
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
    getByCategory,
    getGenres,
    getByGenre,
};

export default Api;
