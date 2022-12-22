import MovieCardButton from "./movieCardButton/MovieCardButton";
import "./movie-card.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ element, type, genreName }) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    const linkPath = () => {
        switch (type) {
            case "movies":
                return `/movie/${element.id}`;
            case "shows":
                return `/tv-show/${element.id}`;
            case "genre":
                return `/genre/${genreName.replace(/\s+/g, "").toLowerCase()}`;
        }
        switch (type) {
            case "movies":
                return element.title;

            case "shows":
                return element.name;
            case "genre":
                return genreName;
        }
    };

    const renderTitle = () => {
        switch (type) {
            case "movies":
                return element.title;

            case "shows":
                return element.name;
            case "genre":
                return genreName;
        }
    };

    return (
        <>
            <div className={"card movie-card position-relative"}>
                <Link to={linkPath()} className="bg-dark">
                    <img
                        onLoad={handleLoad}
                        src={
                            type === "genre"
                                ? `https://image.tmdb.org/t/p/w500/${element.backdrop_path}`
                                : `https://image.tmdb.org/t/p/w500/${element.poster_path}`
                        }
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
                {type === "genre" ? (
                    <h1 className={"btn d-none position-absolute top-50 start-50 translate-middle rounded-circle text-white"}>
                        {genreName}
                    </h1>
                ) : (
                    <MovieCardButton element={element} type={type} />
                )}
            </div>

            <Link className="titulo-card text-white" to={linkPath()}>
                {renderTitle()}
            </Link>
        </>
    );
};

export default MovieCard;
