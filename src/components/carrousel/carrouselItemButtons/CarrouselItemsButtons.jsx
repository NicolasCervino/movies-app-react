import "./carrousel-items-buttons.css";
import { MyListContext } from "../../../context/ListContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const CarrouselItemButtons = ({ movie }) => {
    const { addMovie, removeMovie, movieOnList } = useContext(MyListContext);

    const handleRemove = () => {
        removeMovie(movie);
    };

    const handleAdd = () => {
        addMovie(movie);
    };

    return (
        <div className="d-flex align-items-center carrousel-caption--buttons">
            {movieOnList(movie) ? (
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
            <button
                type="button"
                className="btn btn-slide-info btn-slide-info-${pelicula.id}"
                data-bs-toggle="modal"
                data-bs-target="#movieInfoModal"
            >
                <span>Mas información</span>
            </button>
        </div>
    );
};

export default CarrouselItemButtons;
