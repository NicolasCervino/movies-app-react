import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./login-modal.css";
import { Link } from "react-router-dom";

function LoginModal({ email, setEmail, password, setPassword, submit }) {
    const [hidePassword, setHidePassword] = useState(true);

    const validateButton = () => {
        return email.trim() === "" || password.trim() === "" || password.length < 6;
    };

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

            <form className="row" onSubmit={submit}>
                <div className="col-12">
                    <div className="form-outline">
                        <input
                            type="email"
                            id="inputUsername"
                            className="form-control form-control-sm"
                            defaultValue={email}
                            placeholder={"Ingrese un email registrado"}
                            required
                            onChange={(e) => setEmail(e.target.value)}
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
                                defaultValue={password}
                                placeholder={"6 caracteres como minimo"}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={6}
                                required
                            />
                            {hidePassword ? (
                                <FontAwesomeIcon icon={faEye} onClick={() => setHidePassword(!hidePassword)} />
                            ) : (
                                <FontAwesomeIcon icon={faEyeSlash} onClick={() => setHidePassword(!hidePassword)} />
                            )}
                        </div>
                        <label className="form-label unselectable">Password</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="login-button btn btn-sm px-4" disabled={validateButton()}>
                        INICIAR SESIÓN
                    </button>
                </div>
            </form>

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
