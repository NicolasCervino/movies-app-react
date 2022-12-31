import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";
import useModal from "../../hooks/useModal";

function Profile() {
    const [show, handleClose] = useModal("/home");

    return (
        <CustomModal show={show} handleClose={handleClose} size={"md"}>
            <ModalContent type={"profile"} handleClose={handleClose} />
        </CustomModal>
    );
}

export default Profile;
