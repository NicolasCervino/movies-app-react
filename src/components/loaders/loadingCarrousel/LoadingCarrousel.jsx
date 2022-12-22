import Carousel from "react-bootstrap/Carousel";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingCarrousel = () => {
    return (
        <SkeletonTheme baseColor="#212121" highlightColor="#525252">
            <Carousel>
                <Carousel.Item>
                    <div className="main-slide">
                        <div className="carousel-caption text-start">
                            <h2 className="titulo-carrousel">
                                <Skeleton width={"60%"} />
                            </h2>
                            <p className="subtitulo-carrousel">
                                <Skeleton count={4} />
                            </p>
                            <div className="d-flex align-items-center carrousel-caption--buttons">
                                <button className="btn btn-dark" disabled style={{ background: "#000", boxShadow: "none" }}>
                                    <Skeleton />
                                </button>

                                <button className="btn btn-dark" disabled style={{ background: "#000", boxShadow: "none" }}>
                                    <Skeleton />
                                </button>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </SkeletonTheme>
    );
};

export default LoadingCarrousel;
