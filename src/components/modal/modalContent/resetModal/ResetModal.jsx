import React from "react";
import { Link } from "react-router-dom";

function ResetModal({ email, setEmail, submit, message, status }) {
    const validateButton = () => {
        // Regular expression to check if string is email
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return !regexExp.test(email);
    };

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo-modal" style={{ fontFamily: "Bebas Neue, cursive" }}>
                        Restablecer contraseña
                    </h1>
                    <p>Ingrese su email y en caso de que coincida le enviaremos un enlace!</p>
                </div>
            </div>
            <form className="row" onSubmit={(e) => submit(e)}>
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
                <div className="row">
                    <p className="m-0 my-2 ">{message}</p>
                </div>
                <div className="col-12">
                    {!status ? (
                        <button type="submit" className="login-button btn btn-sm px-4" disabled={validateButton()}>
                            Enviar email
                        </button>
                    ) : (
                        <Link className="login-button btn btn-sm px-4" to="/home/login">
                            Volver a Iniciar Sesion
                        </Link>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ResetModal;
