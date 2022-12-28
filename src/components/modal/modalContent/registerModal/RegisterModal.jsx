import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./registerForm/RegisterForm";

function RegisterModal({ email, setEmail, password, setPassword, submit, errorCode }) {
    // const [hidePassword, setHidePassword] = useState(true);
    const [errorMessage, setErrorMesage] = useState("");

    useEffect(() => {
        const handleError = (code) => {
            switch (code) {
                case "auth/email-already-in-use":
                    setErrorMesage("El email ingresado ya se encuentra en uso");
                    break;
                case "auth/invalid-email":
                    setErrorMesage("El email ingresado no es valido");
                    break;

                case "auth/weak-password":
                    setErrorMesage("La contraseña debe tener al menos 6 caracteres");
                    break;
            }
        };
        handleError(errorCode);
    }, [errorCode]);

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo-modal" style={{ fontFamily: "Bebas Neue, cursive" }}>
                        Registrarse
                    </h1>
                    <p>Ingrese su email y una contraseña!</p>
                </div>
            </div>
            <RegisterForm
                submit={submit}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                errorMessage={errorMessage}
                setErrorMesage={setErrorMesage}
            />

            {errorCode && (
                <div className="row">
                    <p className="error-message m-0 mt-2 ">{errorMessage}</p>
                </div>
            )}

            <div className="row mt-2">
                <div className="col-12">
                    <p className="subtitulo-registro mb-0">
                        Ya tienes una cuenta?{" "}
                        <Link to={"/home/login"} className="text-white-50 fw-bold">
                            Iniciar Sesion
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
