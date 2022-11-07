import Carousel from "react-bootstrap/Carousel";
import "./carrousel-item.css";

const CarrouselItem = ({ movie }) => {
    return (
        movie && (
            <>
                <div className="img-overlay">
                    {/* Imagen Principal */}
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className="d-none d-sm-block w-100" />
                    {/* Imagen Mobile */}
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="d-block d-sm-none w-100" />
                </div>
                <Carousel.Caption>
                    <div className="carousel-caption container">
                        <div className="row w-50">
                            <h2 className="text-start titulo-carrousel">{movie.title}</h2>
                            <p className="text-start subtitulo-carrousel">{movie.overview.slice(0, 200) + "..."}</p>
                        </div>

                        {/*  Botones Carrousel */}
                        <div className="btns btns-${peliculasDestacadas.indexOf(pelicula)}">
                            {/* ${validarBotonSlide(pelicula)} */}
                            <button
                                type="button"
                                className="btn btn-slide-info btn-slide-info-${pelicula.id}"
                                data-bs-toggle="modal"
                                data-bs-target="#movieInfoModal"
                            >
                                <span>Mas información</span>
                            </button>
                        </div>
                    </div>
                </Carousel.Caption>
            </>
        )
    );
};

export default CarrouselItem;
