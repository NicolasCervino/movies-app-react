import MovieCardButton from "./movieCardButton/MovieCardButton";
import "./movie-card.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ element, type }) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <>
            <div className={"card movie-card position-relative"}>
                <Link to={type === "movies" ? `/movie/${element.id}` : `/tv-show/${element.id}`} className="bg-dark">
                    <img
                        onLoad={handleLoad}
                        src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                        loading={"lazy"}
                        className="card-img-top"
                        draggable={false}
                    />

                    <div className="d-flex justify-content-center bg-dark">
                        <div className={`spinner-border text-danger ${!loading ? "d-none" : ""}`} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Link>
                <MovieCardButton element={element} type={type} />
            </div>

            <Link className="titulo-card text-white" to={type === "movies" ? `/movie/${element.id}` : `/tv-show/${element.id}`}>
                {type === "movies" ? element.title : element.name}
            </Link>
        </>
    );
};

export default MovieCard;
