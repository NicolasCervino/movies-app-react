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
        return moviesList.find((m) => m.id === movie.id) !== undefined;
    };

    const showOnList = (show) => {
        return showsList.find((s) => s.id === show.id) !== undefined;
    };

    const addMovie = (movie) => {
        if (!movieOnList(movie)) {
            setMoviesList((prevState) => [...prevState, movie]);
        }
    };

    const removeMovie = (movie) => {
        setMoviesList((prevState) => [...prevState.filter((m) => m.id !== movie.id)]);
    };

    const addShow = (show) => {
        if (!showOnList(show)) {
            setShowsList((prevState) => [...prevState, show]);
        }
    };

    const removeShow = (show) => {
        setShowsList((prevState) => [...prevState.filter((s) => s.id !== show.id)]);
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
                addShow,
                removeShow,
            }}
        >
            {children}
        </MyListContext.Provider>
    );
};
