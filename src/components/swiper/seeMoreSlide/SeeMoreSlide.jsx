import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./see-more.css";

const SeeMoreSlide = ({ type, category }) => {
    return (
        <div className="see-more card ">
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                <Link className="see-more-link" to={type === "movie" ? `/movies#${category}` : `/tv-shows#${category}`}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </Link>
                <p>Ver mas...</p>
            </div>
        </div>
    );
};

export default SeeMoreSlide;
