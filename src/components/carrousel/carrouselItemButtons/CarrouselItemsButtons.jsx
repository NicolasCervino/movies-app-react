import "./carrousel-items-buttons.css";
import { useMyList } from "../../../context/ListContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CarrouselItemButtons = ({ movie, type }) => {
    const { addElement, removeElement, elementOnList } = useMyList();

    const [isShown, setIsShown] = useState(false);

    const location = useLocation();

    const [t, i18n] = useTranslation("global")

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
                    {isShown ? <span> {t("carrousel-item.delete-button")}</span> : <span> {t("carrousel-item.on-list-button")}</span>}
                </button>
            ) : (
                <button onClick={handleAdd}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    <span>{t("carrousel-item.add-button")}</span>
                </button>
            )}
            {type === "movie" ? (
                <Link to={`movies/${movie.id}`} state={{ background: location }}>
                    <span>{t("carrousel-item.info-button")}</span>
                </Link>
            ) : (
                <Link to={`tv-shows/${movie.id}`} state={{ background: location }}>
                    <span>{t("carrousel-item.info-button")}</span>
                </Link>
            )}
        </div>
    );
};

export default CarrouselItemButtons;
