import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalHeader = ({ element, handleClose }) => {
    return (
        <div className="row">
            <div className="custom-modal--header col-12 p-0" style={{ height: "70vh" }}>
                <img src={`https://image.tmdb.org/t/p/original/${element.backdrop_path}`} className="img-modalInfo w-100 h-100" />
                <div onClick={handleClose} className="custom-modal--close-button">
                    <FontAwesomeIcon icon={faCircleXmark} color="#181818" className="close-icon" />
                </div>
            </div>
        </div>
    );
};

export default ModalHeader;
