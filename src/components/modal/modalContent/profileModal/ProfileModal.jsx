import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile-modal.css";
import { useTranslation } from "react-i18next";

function ProfileModal() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [t, i18n] = useTranslation("global")

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo-modal" style={{ fontFamily: "Bebas Neue, cursive" }}>
                        {t("my-profile.user")} {user.displayName || user.email}
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center py-4">
                    {user && user.photoURL ? (
                        <img src={user.photoURL} className="user-img" loading="lazy"></img>
                    ) : (
                        <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
                    )}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <button className="btn w-100 btn-logout" onClick={handleLogout}>
                        {t("my-profile.button")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileModal;
