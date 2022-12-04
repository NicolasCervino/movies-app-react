import { Col, Modal, Row } from "react-bootstrap";
import "./custom-modal.css";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomModal = ({ show, handleClose, movie, type }) => {
    return (
        <Modal show={show} onHide={handleClose} centered={true} dialogClassName={"modal-fullscreen-sm-down modal-90w"}>
            <Modal.Body className="p-0 bg-dark text-white">
                <div className="container-fluid">
                    <div className="row">
                        <div className="custom-modal--header col-12 p-0" style={{ height: "55vh" }}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="img-modalInfo w-100 h-100" />
                            <div onClick={handleClose} className="custom-modal--close-button">
                                <FontAwesomeIcon icon={faCircleXmark} color="#181818" className="close-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-3 pt-2">
                    <Row>
                        <div className="col-12">
                            <h3>{type === "movies" ? movie.title : movie.name}</h3>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-8">
                            <div className="col-12">
                                <span className="modal--info px-1">{new Date(movie.release_date).getFullYear()}</span>
                                <span className="modal--info px-1">{movie.runtime + "m"}</span>
                                <span className="modal--info px-1">
                                    {movie.genres[0].name}, {movie.genres[1].name}
                                </span>
                                <span className="modal--info px-1">
                                    <span style={{ color: "#777" }}> Dirección: </span>
                                    {movie.director}
                                </span>
                            </div>
                            <p>{movie.overview}</p>
                        </div>
                        <div className="col-4 px-2">
                            <span style={{ color: "#777" }}> Elenco: </span>
                            <ul className="px-3">
                                <li>{movie.credits.cast[0] ? movie.credits.cast[0].name : "no hay datos"}</li>
                                <li>{movie.credits.cast[1] ? movie.credits.cast[1].name : "no hay datos"}</li>
                                <li>{movie.credits.cast[2] ? movie.credits.cast[2].name : "no hay datos"}</li>
                            </ul>
                        </div>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;
