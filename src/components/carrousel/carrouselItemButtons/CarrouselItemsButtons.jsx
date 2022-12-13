import "./carrousel-items-buttons.css";
import { MyListContext } from "../../../context/ListContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CarrouselItemButtons = ({ movie, type }) => {
    const { addElement, removeElement, elementOnList } = useContext(MyListContext);

    const navigate = useNavigate();

    const handleRemove = () => {
        removeElement(movie, type);
    };

    const handleAdd = () => {
        addElement(movie, type);
    };

    const handleInfo = () => {
        type === "movies" ? navigate(`movie/${movie.id}`) : navigate(`tv-show/${movie.id}`);
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

            <button onClick={handleInfo}>
                <span>Mas información</span>
            </button>
        </div>
    );
};

export default CarrouselItemButtons;
