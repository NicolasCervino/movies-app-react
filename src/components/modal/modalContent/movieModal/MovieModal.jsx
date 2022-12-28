import ModalHeader from "./modalHeader/ModalHeader";
import ModalInfo from "./modalInfo/ModalInfo";

function MovieModal({ element, handleClose, type }) {
    return (
        <>
            <div className="container-fluid">
                <ModalHeader element={element} handleClose={handleClose} />
            </div>
            <div className="container-fluid px-3 pt-2">
                <ModalInfo element={element} type={type} />
            </div>
        </>
    );
}

export default MovieModal;
