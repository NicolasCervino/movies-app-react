import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = ({ submit, email, setEmail, password, setPassword }) => {
    const [hidePassword, setHidePassword] = useState(true);

    const validateButton = () => {
        return email.trim() === "" || password.trim() === "" || password.length < 6;
    };

    return (
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
    );
};

export default LoginForm;
