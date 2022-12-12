import ModalHeader from "./modalHeader/modalHeader";
import ModalInfo from "./modalInfo/ModalInfo";

const ModalContent = ({ element, type, handleClose }) => {
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
};

export default ModalContent;
