import { Modal } from "react-bootstrap";
import "./custom-modal.css";

const CustomModal = ({ show, handleClose, children, size }) => {
    return (
        <Modal show={show} onHide={handleClose} centered={true} size={size} contentClassName="custom-modal-content">
            <Modal.Body className="p-0 bg-dark text-white">{children}</Modal.Body>
        </Modal>
    );
};

export default CustomModal;
