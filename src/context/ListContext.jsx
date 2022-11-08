import React, { useState, useEffect } from "react";

export const MyListContext = React.createContext();

export const MyListProvider = ({ children }) => {
    const [moviesList, setMoviesList] = useState([]);
    const [showsList, setShowsList] = useState([]);

    useEffect(() => {
        // if (localStorage.getItem("movies-list")) {
        //     setMoviesList(JSON.parse(localStorage.getItem("movies-list")));
        // }
        // if (localStorage.getItem("shows-list")) {
        //     setShowsList(JSON.parse(localStorage.getItem("shows-list")));
        // }
    }, []);

    const movieOnList = (movie) => {
        return moviesList.includes(movie);
    };

    const showOnList = (show) => {
        return showsList.includes(show);
    };

    const addMovie = (movie) => {
        // localStorage.setItem("movies-list", JSON.stringify([movie]));
        setMoviesList((prevState) => [...prevState, movie]);
    };

    const removeMovie = (movie) => {
        setMoviesList((prevState) => [...prevState.filter((m) => m.id !== movie.id)]);
    };

    return (
        <MyListContext.Provider
            value={{
                moviesList,
                showsList,
                movieOnList,
                showOnList,
                addMovie,
                removeMovie,
            }}
        >
            {children}
        </MyListContext.Provider>
    );
};
