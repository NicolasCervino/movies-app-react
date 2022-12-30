import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import "./user-icon.css";

function UserIcon() {
    const location = useLocation();

    return (
        <div className="ms-md-1">
            <Link to="/home/profile" state={{ background: location }} className="btn btn-user btn-light">
                <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
            </Link>
        </div>
    );
}

export default UserIcon;
