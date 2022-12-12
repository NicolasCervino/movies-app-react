import { Modal } from "react-bootstrap";
import "./custom-modal.css";

const CustomModal = ({ show, handleClose, children }) => {
    return (
        <Modal show={show} onHide={handleClose} centered={true} fullscreen>
            <Modal.Body className="p-0 bg-dark text-white">{children}</Modal.Body>
        </Modal>
    );
};

export default CustomModal;
