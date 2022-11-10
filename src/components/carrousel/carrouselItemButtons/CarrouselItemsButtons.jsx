import "./carrousel-items-buttons.css";
import { MyListContext } from "../../../context/ListContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CarrouselItemButtons = ({ movie, type }) => {
    const { addMovie, removeMovie, movieOnList, addShow, removeShow, showOnList } = useContext(MyListContext);

    const handleRemove = () => {
        switch (type) {
            case "movies":
                removeMovie(movie);
                break;
            case "shows":
                removeShow(movie);
                break;
        }
    };

    const handleAdd = () => {
        switch (type) {
            case "movies":
                addMovie(movie);
                break;
            case "shows":
                addShow(movie);
                break;
        }
    };

    return (
        <div className="d-flex align-items-center carrousel-caption--buttons">
            {movieOnList(movie) || showOnList(movie) ? (
                <button onClick={handleRemove}>
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                    <span> En mi lista</span>
                </button>
            ) : (
                <button onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <span>Agregar a mi lista</span>
                </button>
            )}

            <Link to={type === "movies" ? `movie/${movie.id}` : `tv-show/${movie.id}`}>
                <button>
                    <span>Mas información</span>
                </button>
            </Link>
        </div>
    );
};

export default CarrouselItemButtons;
