import MovieCast from "./MovieCast";
import MovieTrailer from "./MovieTrailer";
import { Link } from "react-router-dom";
import { useMyList } from "../../../../../context/ListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../../../../hooks/useWindowDimensions";
import { useTranslation } from "react-i18next";

const ModalInfo = ({ element, type }) => {
    const genres = element.genres?.map((g) => g.name);
    const { addElement, removeElement, elementOnList } = useMyList();
    const [t, i18n] = useTranslation("global")

    const [isMobile] = useWindowDimensions();

    const handleAdd = () => {
        addElement(element, type);
    };

    const handleRemove = () => {
        removeElement(element, type);
    };

    return (
        <>
            <div className="row">
                {/* Movie/Show Title */}
                <div className="col-12">
                    <h3 className="m-0">{type === "movie" ? element.title : element.name}</h3>
                    <p style={{ color: "#777" }}>{type === "movie" ? element.original_title : element.original_name}</p>
                </div>

                <div className="col-12 col-lg-8">
                    {/* Movie/Show Data */}
                    <div className="col-12 my-2">
                        <button className="btn btn-add-to-list w-100" onClick={elementOnList(element, type) ? handleRemove : handleAdd}>
                            {elementOnList(element, type) ? (
                                <>
                                    <FontAwesomeIcon icon={faCheck} />{t("carrousel-item.on-list-button")}
                                </>
                            ) : (
                                <>
                                    <FontAwesomeIcon icon={faPlus} />{t("carrousel-item.add-button")}
                                </>
                            )}
                        </button>
                    </div>
                    <div className={`col-12 pb-3 d-flex gap-2 ${isMobile ? "flex-wrap" : ""}`}>
                        <span className="modal--info pe-2">
                            {element.director ? (
                                <>
                                    <span style={{ color: "#777" }}>{t("modal-info.director")}</span>
                                    {element.director}
                                </>
                            ) : (
                                <>
                                    <span style={{ color: "#777" }}>{t("modal-info.creator")}</span>
                                    {element.creator}
                                </>
                            )}
                        </span>

                        {type === "movie" ? (
                            <span className="modal--info pe-2">
                                <span style={{ color: "#777" }}>{t("modal-info.duration")}</span>
                                {element.runtime + "m"}
                            </span>
                        ) : (
                            <span className="modal--info pe-2">
                                <span style={{ color: "#777" }}>{t("modal-info.seasons")}</span>
                                {element.number_of_seasons}
                            </span>
                        )}

                        <span className="modal--info pe-2">
                            <span style={{ color: "#777" }}>{t("modal-info.genres")}</span>
                            {genres.map((g, index) => (
                                <Link to={`/genre/${type}/${g.replace(/\s+/g, "").toLowerCase()}`} key={g} className="genre-link">
                                    {(index ? ", " : "") + g}
                                </Link>
                            ))}
                        </span>

                        <span className="modal--info pe-2">
                            <span style={{ color: "#777" }}>{t("modal-info.year")}</span>
                            {type === "movie"
                                ? new Date(element.release_date).getFullYear()
                                : new Date(element.first_air_date).getFullYear()}
                        </span>
                    </div>
                    <p>{element.overview}</p>
                </div>
                <MovieCast element={element} />
            </div>
            {/* Movie/Show Trailer */}
            <div className="row justify-content-center">
                <MovieTrailer element={element} />
            </div>
        </>
    );
};

export default ModalInfo;
