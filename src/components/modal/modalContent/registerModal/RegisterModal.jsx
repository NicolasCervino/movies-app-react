import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./registerForm/RegisterForm";
import { useTranslation } from "react-i18next";

function RegisterModal({ email, setEmail, password, setPassword, submit, errorCode }) {
    const [errorMessage, setErrorMesage] = useState("");
    const [t, i18n] = useTranslation("global")

    useEffect(() => {
        const handleError = (code) => {
            switch (code) {
                case "auth/email-already-in-use":
                    setErrorMesage(t("register.error-message-1"));
                    break;
                case "auth/invalid-email":
                    setErrorMesage(t("register.error-message-2"));
                    break;

                case "auth/weak-password":
                    setErrorMesage(t("register.error-message-3"));
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
                        {t("register.title")}
                    </h1>
                    <p>{t("register.description")}</p>
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
                        {t("register.login?")}
                        <Link to={"/home/login"} className="text-white-50 fw-bold">
                            {t("register.login")}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
