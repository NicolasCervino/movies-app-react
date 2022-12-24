import MovieCast from "./MovieCast";
import MovieTrailer from "./MovieTrailer";
import { Link } from "react-router-dom";

const ModalInfo = ({ element, type }) => {
    const genres = element.genres?.map((g) => g.name);

    return (
        <>
            <div className="row">
                {/* Movie/Show Title */}
                <div className="col-12">
                    <h3>{type === "movie" ? element.title : element.name}</h3>
                </div>

                <div className="col-12 col-lg-8">
                    {/* Movie/Show Data */}
                    <div className="d-flex gap-2 flex-wrap">
                        <span className="modal--info pe-2">
                            <span style={{ color: "#777" }}> Dirección: </span>
                            {element.director}
                        </span>

                        {type === "movie" ? (
                            <span className="modal--info pe-2">
                                <span style={{ color: "#777" }}> Duracion: </span>
                                {element.runtime + "m"}
                            </span>
                        ) : (
                            <span className="modal--info pe-2">
                                <span style={{ color: "#777" }}> Temporadas: </span>
                                {element.number_of_seasons}
                            </span>
                        )}

                        <span className="modal--info pe-2">
                            <span style={{ color: "#777" }}> Generos: </span>
                            {genres.map((g, index) => (
                                <Link to={`/genre/${type}/${g.replace(/\s+/g, "").toLowerCase()}`} key={g} className="genre-link">
                                    {(index ? ", " : "") + g}
                                </Link>
                            ))}
                        </span>

                        <span className="modal--info pe-2">
                            <span style={{ color: "#777" }}> Año: </span>
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
