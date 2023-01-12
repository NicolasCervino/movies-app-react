import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";

const ModalHeader = ({ element, handleClose }) => {
    const [isMobile] = useWindowDimensions();

    const [backdrop, setBackdrop] = useState("");

    useEffect(() => {
        const noImageAvailable = "https://via.placeholder.com/500x750?text=No+Image+Available";
        isMobile
            ? setBackdrop(element.poster_path ? `https://image.tmdb.org/t/p/w500${element.poster_path}` : noImageAvailable)
            : setBackdrop(element.backdrop_path ? `https://image.tmdb.org/t/p/original${element.backdrop_path}` : noImageAvailable);
    }, [isMobile]);

    return (
        <div className="row">
            <div className="custom-modal--header col-12 p-0">
                <img src={backdrop} className="img-modalInfo w-100 h-100" />
                <div onClick={handleClose} className="custom-modal--close-button">
                    <FontAwesomeIcon icon={faCircleXmark} color="#181818" className="close-icon" />
                </div>
            </div>
        </div>
    );
};

export default ModalHeader;
