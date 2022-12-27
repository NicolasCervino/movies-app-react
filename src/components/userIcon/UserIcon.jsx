import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./user-icon.css";

function UserIcon() {
    return (
        <div class="ms-md-1">
            <Link to="/home/login" className="btn btn-user btn-light">
                <FontAwesomeIcon icon={faUser} style={{ color: "#fff" }} />
            </Link>
        </div>
    );
}

export default UserIcon;
