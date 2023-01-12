import "./carrousel-item.css";
import CarrouselItemButtons from "../carrouselItemButtons/CarrouselItemsButtons";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const CarrouselItem = ({ movie, type }) => {
    const [isMobile] = useWindowDimensions();

    return (
        <div
            className="main-slide"
            style={
                isMobile
                    ? { backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }
                    : { backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }
            }
        >
            <div className={`carousel-caption text-start ${!isMobile ? "w-50 px-2" : ""}`}>
                <h2 className="titulo-carrousel">{type === "movie" ? movie.title : movie.name}</h2>
                <div>
                    <p className="subtitulo-carrousel">
                        {!isMobile ? movie.overview.slice(0, 300) + "..." : movie.overview.slice(0, 150) + "..."}
                    </p>
                </div>
                <CarrouselItemButtons movie={movie} type={type} />
            </div>
        </div>
    );
};

export default CarrouselItem;
