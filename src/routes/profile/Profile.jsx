import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";

function Profile() {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        if (location.state !== null) {
            navigate(-1);
        } else {
            navigate("/home");
        }
    };

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <CustomModal show={show} handleClose={handleClose} size={"md"}>
            <ModalContent type={"profile"} handleClose={handleClose} />
        </CustomModal>
    );
}

export default Profile;
