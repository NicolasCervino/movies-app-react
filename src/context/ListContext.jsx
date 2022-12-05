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

    const addElement = (element, type) => {
        switch (type) {
            case "movies":
                addMovie(element);
                break;
            case "shows":
                addShow(element);
                break;
        }
    };

    const removeElement = (element, type) => {
        switch (type) {
            case "movies":
                removeMovie(element);
                break;
            case "shows":
                removeShow(element);
                break;
        }
    };

    const elementOnList = (element, type) => {
        switch (type) {
            case "movies":
                return movieOnList(element);
                break;
            case "shows":
                return showOnList(element);
                break;
        }
    };

    return (
        <MyListContext.Provider
            value={{
                moviesList,
                showsList,
                addElement,
                removeElement,
                elementOnList,
            }}
        >
            {children}
        </MyListContext.Provider>
    );
};
