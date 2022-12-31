import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";
import { useAuth } from "../../context/AuthContext";
import useModal from "../../hooks/useModal";

function Register() {
    const [show, handleClose] = useModal("/home");
    const { signup } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
