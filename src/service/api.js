import axios from "axios";

const apiKey = "f3b242b5857fe6135b2f4c0420e0ba0b";

const getPopular = async (type, page, language) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=${language}&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getData = async (movieId, type, language) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/${movieId}?api_key=${apiKey}&language=${language}&append_to_response=credits,videos`)
        .then((response) => {
            return response;
        });
};

const getTop = async (type, page, language) => {
    return await axios
        .get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=${language}&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

// Only works with Movies
const getUpcoming = async (page, language) => {
    return await axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=${language}&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

// Only works with TV
const getAiring = async (page, language) => {
    return await axios
        .get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=${language}&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getByCategory = async (category, type, page, language) => {
    switch (category) {
        case "popular":
            return await getPopular(type, page, language).then((data) => data);

        case "top_rated":
            return await getTop(type, page, language).then((data) => data);

        case "upcoming":
            return await getUpcoming(page, language).then((data) => {
                return data;
            });

        case "on_the_air":
            return await getAiring(page, language).then((data) => data);

        default:
            return await getPopular(type, page, language).then((data) => data);
    }
};

const getGenres = async (type, language) => {
    return await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${apiKey}&language=${language}`).then((response) => {
        return response.data;
    });
};

const getByGenre = async (type, genreId, page, language) => {
    return await axios
        .get(`https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}&language=${language}&with_genres=${genreId}&page=${page}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => console.log(error));
};

const getSearch = async (type, query, page, language) => {
    return await axios
        .get(`https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${query}&language=${language}&page=${page}`)
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
    getSearch,
};

export default Api;
