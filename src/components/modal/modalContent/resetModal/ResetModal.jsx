import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ResetModal({ email, setEmail, submit, message, status }) {

    const [t, i18n] = useTranslation("global")

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
                        {t("restore-password.title")}
                    </h1>
                    <p>{t("restore-password.description")}</p>
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
                            placeholder={t("restore-password.email-placeholder")}
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
                            {t("restore-password.button-1")}
                        </button>
                    ) : (
                        <Link className="login-button btn btn-sm px-4" to="/home/login">
                            {t("restore-password.button-2")}
                        </Link>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ResetModal;
