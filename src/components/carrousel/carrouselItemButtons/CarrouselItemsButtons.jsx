import "./carrousel-items-buttons.css";
import { useMyList } from "../../../context/ListContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const CarrouselItemButtons = ({ movie, type }) => {
    const { addElement, removeElement, elementOnList } = useMyList();

    const [isShown, setIsShown] = useState(false);

    const location = useLocation();

    const handleRemove = () => {
        removeElement(movie, type);
    };

    const handleAdd = () => {
        addElement(movie, type);
    };

    return (
        <div className="d-flex align-items-center carrousel-caption--buttons">
            {elementOnList(movie, type) ? (
                <button onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={handleRemove}>
                    {isShown ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCheck} />}
                    {isShown ? <span> Eliminar de mi lista</span> : <span> En mi lista</span>}
                </button>
            ) : (
                <button onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <span>Agregar a mi lista</span>
                </button>
            )}
            {type === "movie" ? (
                <Link to={`movies/${movie.id}`} state={{ background: location }}>
                    <span>Mas información</span>
                </Link>
            ) : (
                <Link to={`tv-shows/${movie.id}`} state={{ background: location }}>
                    <span>Mas información</span>
                </Link>
            )}
        </div>
    );
};

export default CarrouselItemButtons;
