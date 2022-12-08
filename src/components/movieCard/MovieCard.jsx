import MovieCardButton from "./movieCardButton/MovieCardButton";
import "./movie-card.css";
import { Link } from "react-router-dom";

const MovieCard = ({ element, type }) => {
    return (
        <>
            <div className={"card movie-card position-relative"}>
                <Link to={type === "movies" ? `/movie/${element.id}` : `/tv-show/${element.id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                        loading={"lazy"}
                        className="card-img-top"
                        draggable={false}
                    />
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
