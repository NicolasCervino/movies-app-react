import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./login-modal.css";

function LoginModal() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo-modal" style={{ fontFamily: "Bebas Neue, cursive" }}>
                        Iniciar Sesion
                    </h1>
                    <p>Ingrese su usuario y contraseña!</p>
                </div>
            </div>

            <form className="row" action="">
                <div className="col-12">
                    <div className="form-outline">
                        <input
                            type="text"
                            id="inputUsername"
                            className="form-control form-control-sm"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label for="inputUsername" className="form-label unselectable">
                            Username
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-outline">
                        <div className="d-flex align-items-center form-control form-control-sm">
                            <input
                                type={hidePassword ? "password" : "text"}
                                className="password-input"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {hidePassword ? (
                                <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword(!hidePassword)} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword(!hidePassword)} />
                            )}
                        </div>
                        <label for="inputPassword" className="form-label unselectable">
                            Password
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="login-button btn btn-sm px-4" data-bs-dismiss="" id="loginSubmit">
                        Login
                    </button>
                </div>
            </form>

            <div className="row mt-2">
                <div className="col-12">
                    <p className="subtitulo-registro mb-0">
                        No tienes una cuenta?{" "}
                        <a href="#!" className="text-white-50 fw-bold">
                            Regístrate
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
