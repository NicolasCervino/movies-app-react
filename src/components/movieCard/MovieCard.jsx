import MovieCardButton from "./movieCardButton/MovieCardButton";
import "./movie-card.css";
import { Link } from "react-router-dom";

const MovieCard = ({ element, type }) => {
    return (
        <div className="col-6 col-sm-3 col-xl-2 p-2">
            <div className={"card position-relative"}>
                <img src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} className="card-img-top" draggable="false" />
                <MovieCardButton element={element} type={type} />
            </div>

            <Link className="titulo-card text-white" to={type === "movies" ? `/movie/${element.id}` : `/tv-show/${element.id}`}>
                {element.title}
            </Link>
        </div>
    );
};

export default MovieCard;
