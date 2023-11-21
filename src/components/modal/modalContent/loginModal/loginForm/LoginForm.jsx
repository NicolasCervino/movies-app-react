import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const LoginForm = ({ submit, email, setEmail, password, setPassword }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [t, i18n] = useTranslation("global")

    const validateButton = () => {
        return email.trim() === "" || password.trim() === "" || password.length < 6;
    };

    return (
        <>
            <form className="row" onSubmit={submit.email}>
                <div className="col-12">
                    <div className="form-outline">
                        <input
                            type="email"
                            id="inputUsername"
                            className="form-control form-control-sm"
                            defaultValue={email}
                            placeholder={t("login-form.email-placeholder")}
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
                                placeholder={t("login-form.password-placeholder")}
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
                        <label className="form-label unselectable">{t("login-form.password-label")}</label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="login-button btn btn-sm px-4" disabled={validateButton()}>
                        {t("login-form.button")}
                    </button>
                </div>
            </form>
            <div className="row">
                <hr className="my-3"></hr>
                <div className="col-12 d-flex flex-column gap-2">
                    <p className="m-0">{t("login-form.socials")}</p>
                    <div className="d-flex gap-3">
                        <button onClick={submit.google} className="btn brand-login login--google">
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>
                        <button onClick={submit.facebook} className="btn brand-login login--facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </button>
                        <button onClick={submit.twitter} className="btn brand-login login--twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
