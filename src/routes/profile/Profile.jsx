import CustomModal from "../../components/modal/CustomModal";
import ProfileModal from "../../components/modal/modalContent/profileModal/ProfileModal";
import useModal from "../../hooks/useModal";

function Profile() {
    const [show, handleClose] = useModal("/home");

    return (
        <CustomModal show={show} handleClose={handleClose} size={"md"}>
            <ProfileModal />
        </CustomModal>
    );
}

export default Profile;
