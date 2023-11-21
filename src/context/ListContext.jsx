import React, { useState, useEffect, createContext, useContext } from "react";
import { useDb } from "../hooks/useDb";
import { useAuth } from "./AuthContext";
import { useSweetAlert } from "../hooks/useSweetAlert";
import { useTranslation } from "react-i18next";

export const MyListContext = createContext();

export const useMyList = () => {
    const context = useContext(MyListContext);
    if (!context) throw new Error("There is no list provider");
    return context;
};

export const MyListProvider = ({ children }) => {
    const [moviesList, setMoviesList] = useState([]);
    const [showsList, setShowsList] = useState([]);

    const { showAlert } = useSweetAlert();

    const { user } = useAuth();

    const [t] = useTranslation("global")

    useEffect(() => {
        if (!user) {
            setMoviesList([]);
            setShowsList([]);
        }
    }, [user]);

    const { addMovieToDB, removeMovieFromDb } = useDb(setMoviesList, setShowsList);

    const movieOnList = (movie) => {
        return moviesList.find((m) => m.id === movie.id) !== undefined;
    };

    const showOnList = (show) => {
        return showsList.find((s) => s.id === show.id) !== undefined;
    };

    const addMovie = async (movie) => {
        if (!movieOnList(movie) && user !== null) {
            addMovieToDB(movie, "movie");
            //showAlert(`Se agrego ${movie.title} a la lista`, "success");
            showAlert(t('alerts.add', { movieTitle: movie.title }), "success");
        } else {
            showAlert(t("alerts.error-1"), "warning");
        }
    };

    const removeMovie = (movie) => {
        if (user !== null) {
            removeMovieFromDb(movie, "movie");
            //showAlert(`Se elimino ${movie.title} a la lista`, "error");
            showAlert(t('alerts.remove', { movieTitle: movie.title }), "error");
        } else {
            showAlert("Debe Iniciar Sesion para poder eliminar peliculas", "warning");
        }
    };

    const addShow = (show) => {
        if (!showOnList(show) && user !== null) {
            addMovieToDB(show, "tv");
            //showAlert(`Se agrego ${show.name} a la lista`, "success");
            showAlert(t('alerts.add', { movieTitle: show.name }), "success");
        } else {
            showAlert(t("alerts.error-2"), "warning");
        }
    };

    const removeShow = (show) => {
        if (user !== null) {
            removeMovieFromDb(show, "tv");
            //showAlert(`Se elimino ${show.name} a la lista`, "error");
            showAlert(t("alerts.remove",{ movieTitle: show.name }), "error")
        } else {
            showAlert("Debe Iniciar Sesion para poder eliminar series", "warning");
        }
    };

    const addElement = async (element, type) => {
        switch (type) {
            case "movie":
                addMovie(element);
                break;
            case "tv":
                addShow(element);
                break;
        }
    };

    const removeElement = (element, type) => {
        switch (type) {
            case "movie":
                removeMovie(element);
                break;
            case "tv":
                removeShow(element);
                break;
        }
    };

    const elementOnList = (element, type) => {
        switch (type) {
            case "movie":
                return movieOnList(element);
            case "tv":
                return showOnList(element);
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
