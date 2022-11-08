import "./carrousel-item.css";
import CarrouselItemButtons from "../carrouselItemButtons/CarrouselItemsButtons";

const CarrouselItem = ({ movie, type }) => {
    return (
        <>
            <div className="img-overlay">
                {/* Imagen Principal */}
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="d-none d-sm-block w-100" />
                {/* Imagen Mobile */}
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="d-block d-sm-none w-100" />
            </div>

            <div className="carousel-caption container">
                <div className="row w-50">
                    <h2 className="text-start titulo-carrousel">{type === "movies" ? movie.title : movie.name}</h2>
                    <p className="text-start subtitulo-carrousel">{movie.overview.slice(0, 200) + "..."}</p>
                </div>
                <CarrouselItemButtons movie={movie} type={type} />
            </div>
        </>
    );
};

export default CarrouselItem;
