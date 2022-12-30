import { async } from "@firebase/util";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";
import { useAuth } from "../../context/AuthContext";

function Login() {
    const [show, setShow] = useState(true);
    const { login, loginWithGoogle, loginWithFacebook, loginWithTwitter } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await login(email, password);
            navigate("/home");
        } catch (error) {
            setError(error.code);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            await loginWithFacebook();
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const handleTwitterLogin = async () => {
        try {
            await loginWithTwitter();
            navigate("/home");
        } catch (error) {
            console.log(error);
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
                type={"login"}
                login={{
                    email: email,
                    setEmail: setEmail,
                    password: password,
                    setPassword: setPassword,
                    submit: { email: submit, google: handleGoogleLogin, facebook: handleFacebookLogin, twitter: handleTwitterLogin },
                    errorCode: error,
                }}
                handleClose={handleClose}
            />
        </CustomModal>
    );
}

export default Login;
