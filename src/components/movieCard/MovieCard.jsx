import MovieCardButton from "./movieCardButton/MovieCardButton";
import "./movie-card.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Spinner from "../loaders/Spinner";

const MovieCard = ({ element, type, genreName, category, wide }) => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const handleLoad = () => {
        setLoading(false);
    };

    const linkPath = () => {
        switch (type) {
            case "movie":
                return `/movies/${element.id}`;
            case "tv":
                return `/tv-shows/${element.id}`;
            case "genre":
                return `/genre/${category}/${genreName.replace(/\s+/g, "").toLowerCase()}`;
        }
    };

    const renderTitle = () => {
        switch (type) {
            case "movie":
                return element.title;

            case "tv":
                return element.name;
            case "genre":
                return genreName;
        }
    };

    const renderImage = () => {
        if (wide && element && element.backdrop_path !== null) {
            return `https://image.tmdb.org/t/p/w500${element.backdrop_path}`;
        } else if (!wide && element && element.poster_path !== null) {
            return `https://image.tmdb.org/t/p/w500${element.poster_path}`;
        } else {
            return "https://via.placeholder.com/500x300?text=No+Image+Available";
        }
    };

    return (
        <>
            <div className={"card movie-card position-relative"}>
                <Link to={linkPath()} state={type !== "genre" && { background: location }} className="bg-dark">
                    <img onLoad={handleLoad} src={renderImage()} loading={"lazy"} className="card-img-top" draggable={false} />
                    <h4 className={"d-none position-absolute top-50 start-50 translate-middle text-white unselectable"}>{genreName}</h4>

                    <Spinner loading={loading} />
                </Link>
                {type !== "genre" ? <MovieCardButton element={element} type={type} /> : ""}
            </div>

            <Link className="titulo-card text-white" to={linkPath()} state={{ background: location }}>
                {renderTitle()}
            </Link>
        </>
    );
};

export default MovieCard;
