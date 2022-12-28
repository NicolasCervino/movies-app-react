import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function RegisterForm({ submit, email, setEmail, password, setPassword, errorMessage, setErrorMesage }) {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideRPassword, setHideRPassword] = useState(true);

    const [repeatPassword, setRepeatPassword] = useState("");

    const validateButton = () => {
        return email.trim() === "" || password.trim() === "" || password.length < 6 || errorMessage !== "" || repeatPassword !== password;
    };

    const validateRepeatPasswordLabel = () => {
        if (repeatPassword !== password && repeatPassword !== "") {
            return <label className="form-label unselectable error-message">Las contraseñas no coinciden</label>;
        } else {
            return <label className="form-label unselectable">Repetir contraseña</label>;
        }
    };

    return (
        <form className="row" onSubmit={submit}>
            <div className="col-12">
                <div className="form-outline">
                    <input
                        type="email"
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
                            <FontAwesomeIcon icon={faEye} style={{ cursor: "pointer" }} onClick={() => setHidePassword(!hidePassword)} />
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
                <div className="form-outline">
                    <div className="d-flex align-items-center form-control form-control-sm">
                        <input
                            type={hideRPassword ? "password" : "text"}
                            className="password-input"
                            onChange={(e) => {
                                setErrorMesage("");
                                setRepeatPassword(e.target.value);
                            }}
                            minLength={6}
                            placeholder={"6 caracteres como minimo"}
                            required
                        />
                        {hideRPassword ? (
                            <FontAwesomeIcon icon={faEye} style={{ cursor: "pointer" }} onClick={() => setHideRPassword(!hideRPassword)} />
                        ) : (
                            <FontAwesomeIcon
                                icon={faEyeSlash}
                                style={{ cursor: "pointer" }}
                                onClick={() => setHideRPassword(!hideRPassword)}
                            />
                        )}
                    </div>
                    {validateRepeatPasswordLabel()}
                </div>
            </div>

            <div className="col-12">
                <button type="submit" className={"login-button btn btn-sm px-4"} disabled={validateButton()}>
                    REGRISTRARSE
                </button>
            </div>
        </form>
    );
}

export default RegisterForm;
