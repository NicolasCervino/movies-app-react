import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";
import { useAuth } from "../../context/AuthContext";

function Register() {
    const [show, setShow] = useState(true);
    const { signup } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signup(email, password);
            navigate("/home");
        } catch (error) {
            setError(error.code);
        }
    };

    const handleClose = () => {
        setShow(false);
        if (location.state !== null) {
            navigate(-1);
        } else {
            navigate("/home");
        }
    };

    return (
        <CustomModal show={show} handleClose={handleClose} size={"md"}>
            <ModalContent
                type={"register"}
                register={{
                    email: email,
                    setEmail: setEmail,
                    password: password,
                    setPassword: setPassword,
                    submit: submit,
                    errorCode: error,
                }}
                handleClose={handleClose}
            />
        </CustomModal>
    );
}

export default Register;