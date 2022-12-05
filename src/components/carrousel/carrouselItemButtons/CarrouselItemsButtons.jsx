import "./carrousel-items-buttons.css";
import { MyListContext } from "../../../context/ListContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CarrouselItemButtons = ({ movie, type }) => {
    const { addElement, removeElement, elementOnList } = useContext(MyListContext);

    const handleRemove = () => {
        removeElement(movie, type);
    };

    const handleAdd = () => {
        addElement(movie, type);
    };

    return (
        <div className="d-flex align-items-center carrousel-caption--buttons">
            {elementOnList(movie, type) ? (
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
