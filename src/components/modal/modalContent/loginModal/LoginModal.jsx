import { useState, useEffect } from "react";
import "./login-modal.css";
import { Link } from "react-router-dom";
import LoginForm from "./loginForm/LoginForm";
import { useTranslation } from "react-i18next";

function LoginModal({ email, setEmail, password, setPassword, submit, errorCode }) {
    const [errorMessage, setErrorMesage] = useState("");
    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        const handleError = (code) => {
            if (code === "auth/user-not-found" || "auth/wrong-password") {
                setErrorMesage(t("login.error-message-1"));
            }
            if (code === "auth/invalid-email") {
                setErrorMesage(t("login.error-message-2"));
            }
        };
        handleError(errorCode);
    }, [errorCode]);

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo-modal" style={{ fontFamily: "Bebas Neue, cursive" }}>
                        {t("login.title")}
                    </h1>
                    <p>{t("login.description")}</p>
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
                    <p className="mb-0">
                        {t("login.forgot-password")}
                        <Link to={"/home/reset-password"} className="text-white-50 fw-bold">
                            {t("login.restore-password")}
                        </Link>
                    </p>
                </div>
                <div className="col-12">
                    <p className="mb-0">
                        {t("login.register?")}
                        <Link to={"/home/register"} className="text-white-50 fw-bold">
                            {t("login.register")}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;
