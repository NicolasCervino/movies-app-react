import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import RegisterModal from "../../components/modal/modalContent/registerModal/RegisterModal";
import { useAuth } from "../../context/AuthContext";
import { useDb } from "../../hooks/useDb";
import useModal from "../../hooks/useModal";

function Register() {
    const [show, handleClose] = useModal("/home");
    const { signup } = useAuth();
    const { addUser } = useDb();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            signup(email, password).then((data) => {
                addUser(data.user);
            });
            navigate("/home");
        } catch (error) {
            setError(error.code);
        }
    };

    return (
        <CustomModal show={show} handleClose={handleClose} size={"md"}>
            <RegisterModal
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                submit={submit}
                errorCode={error}
            />
        </CustomModal>
    );
}

export default Register;
