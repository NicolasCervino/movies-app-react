import "./carrousel-items-buttons.css";

const CarrouselItemButtons = () => {
    return (
        <div className="d-flex align-items-center carrousel-caption--buttons">
            <button type="button" class="btn btn-slide-list btn-slide-remove">
                <i class="fa-solid fa-check"></i>
                <span> En mi lista</span>
            </button>
            <button
                type="button"
                className="btn btn-slide-info btn-slide-info-${pelicula.id}"
                data-bs-toggle="modal"
                data-bs-target="#movieInfoModal"
            >
                <span>Mas información</span>
            </button>
        </div>
    );
};

export default CarrouselItemButtons;
