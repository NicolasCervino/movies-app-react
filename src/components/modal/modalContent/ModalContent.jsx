import ModalHeader from "./modalHeader/modalHeader";
import ModalInfo from "./modalInfo/ModalInfo";
import LoginModal from "./loginModal/LoginModal";

const ModalContent = ({ element, type, handleClose }) => {
    return type === "login" ? (
        <LoginModal />
    ) : (
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
