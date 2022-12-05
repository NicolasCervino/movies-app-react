import MovieCardButton from "./movieCardButton/MovieCardButton";
import "./movie-card.css";

const MovieCard = ({ movie, type }) => {
    return (
        <div className="col-6 col-sm-3 col-xl-2 p-2">
            <div className={"card position-relative"}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." draggable="false" />
                <MovieCardButton movie={movie} type={type} />
            </div>
            <h6 className="titulo-card text-white" data-bs-toggle="modal" data-bs-target="#movieInfoModal">
                {movie.title}
            </h6>
        </div>
    );
};

export default MovieCard;
