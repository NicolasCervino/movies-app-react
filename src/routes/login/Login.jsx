import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomModal from "../../components/modal/CustomModal";
import LoginModal from "../../components/modal/modalContent/loginModal/LoginModal";
import { useAuth } from "../../context/AuthContext";
import { useDb } from "../../hooks/useDb";
import useModal from "../../hooks/useModal";

function Login() {
    const [show, handleClose] = useModal("/home");
    const { login, loginWithGoogle, loginWithFacebook, loginWithTwitter } = useAuth();
    const { addUser } = useDb();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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
            loginWithGoogle().then((data) => {
                addUser(data.user);
            });
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            loginWithFacebook().then((data) => {
                addUser(data.user);
            });
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    const handleTwitterLogin = async () => {
        try {
            loginWithTwitter().then((data) => {
                addUser(data.user);
            });
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <CustomModal show={show} handleClose={handleClose} size={"md"}>
            <LoginModal
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                submit={{ email: submit, google: handleGoogleLogin, facebook: handleFacebookLogin, twitter: handleTwitterLogin }}
                errorCode={error}
            />
        </CustomModal>
    );
}

export default Login;
