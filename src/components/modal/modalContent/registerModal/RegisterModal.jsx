import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function RegisterModal({ email, setEmail, password, setPassword, submit, errorCode }) {
    const [hidePassword, setHidePassword] = useState(true);
    const [errorMessage, setErrorMesage] = useState("");

    const validateButton = () => {
        return email.trim() === "" || password.trim() === "" || password.length < 6 || errorMessage !== "";
    };

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

            <form className="row" onSubmit={submit}>
                <div className="col-12">
                    <div className="form-outline">
                        <input
                            type="text"
                            id="inputUsername"
                            className="form-control form-control-sm"
                            defaultValue={email}
                            placeholder={"Ingrese un correo valido"}
                            required
                            onChange={(e) => {
                                setErrorMesage("");
                                setEmail(e.target.value);
                            }}
                        />
                        <label className="form-label unselectable">Email</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-outline">
                        <div className="d-flex align-items-center form-control form-control-sm">
                            <input
                                type={hidePassword ? "password" : "text"}
                                className="password-input"
                                onChange={(e) => {
                                    setErrorMesage("");
                                    setPassword(e.target.value);
                                }}
                                defaultValue={password}
                                minLength={6}
                                placeholder={"6 caracteres como minimo"}
                                required
                            />
                            {hidePassword ? (
                                <FontAwesomeIcon
                                    icon={faEye}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setHidePassword(!hidePassword)}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faEyeSlash}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setHidePassword(!hidePassword)}
                                />
                            )}
                        </div>
                        <label className="form-label unselectable">Contraseña</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className={"login-button btn btn-sm px-4"} disabled={validateButton()}>
                        REGRISTRARSE
                    </button>
                </div>
            </form>

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
