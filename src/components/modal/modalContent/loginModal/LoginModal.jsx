import { useState, useEffect } from "react";
import "./login-modal.css";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";

function LoginModal({ email, setEmail, password, setPassword, submit, errorCode }) {
    const [errorMessage, setErrorMesage] = useState("");

    useEffect(() => {
        const handleError = (code) => {
            if (code === "auth/user-not-found" || "auth/wrong-password") {
                setErrorMesage("Email o contraseña incorrectos");
            }
            if (code === "auth/invalid-email") {
                setErrorMesage("Email invalido");
            }
        };
        handleError(errorCode);
    }, [errorCode]);

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo-modal" style={{ fontFamily: "Bebas Neue, cursive" }}>
                        Iniciar Sesion
                    </h1>
                    <p>Ingrese su email y contraseña!</p>
                </div>
            </div>
            <LoginForm submit={submit} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />

            {errorCode && (
                <div className="row">
                    <p className="error-message m-0 mt-2 ">{errorMessage}</p>
                </div>
            )}

            <div className="row mt-2">
                <div className="col-12">
                    <p className="subtitulo-registro mb-0">
                        No tienes una cuenta?{" "}
                        <Link to={"/home/register"} className="text-white-50 fw-bold">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
