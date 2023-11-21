import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function LanguageIcon() {
    const location = useLocation();
    
    return (
        <div className="ms-md-1">
            <Link to="/home/language-selection" state={{ background: location }} className="btn btn-user btn-light">
                <FontAwesomeIcon icon={faGlobe} style={{ color: "#fff" }} />
            </Link>
        </div>
    );
}

export default LanguageIcon;