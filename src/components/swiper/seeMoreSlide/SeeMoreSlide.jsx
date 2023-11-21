import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./see-more.css";
import { useTranslation } from "react-i18next";

const SeeMoreSlide = ({ type, category, bigList }) => {
    const [t, i18n] = useTranslation("global")
    
    return (
        <div className="see-more card ">
            <div className="card-body d-flex justify-content-center align-items-center flex-column">
                {category && (
                    <>
                        <Link className="see-more-link" to={type === "movie" ? `/movies#${category}` : `/tv-shows#${category}`}>
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </Link>
                        <p className="unselectable">{t("see-more-slide.button")}</p>
                    </>
                )}
                {bigList && (
                    <>
                        <Link className="see-more-link" to="/my-list">
                            <FontAwesomeIcon icon={faAnglesRight} />
                        </Link>
                        <p className="unselectable">{t("see-more-slide.button")}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default SeeMoreSlide;
