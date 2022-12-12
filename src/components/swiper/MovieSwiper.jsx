import { Navigation, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "../movieCard/MovieCard";
import SeeMoreSlide from "./seeMoreSlide/SeeMoreSlide";

const MovieSwiper = ({ elements, type, category }) => {
    return (
        <Swiper
            modules={[Navigation, Mousewheel]}
            spaceBetween={10}
            slidesPerView={5}
            slidesPerGroup={4}
            navigation
            mousewheel={true}
            speed={300}
            breakpoints={{
                "@0.00": {
                    slidesPerView: 2,
                },
                "@0.75": {
                    slidesPerView: 2,
                },
                "@1.00": {
                    slidesPerView: 4,
                },
                "@1.50": {
                    slidesPerView: 5,
                },
            }}
        >
            {!elements ? (
                <div className="spinner-border text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <>
                    {elements.map((m) => (
                        <SwiperSlide className="h-auto" key={m.id}>
                            <MovieCard element={m} type={type} />
                        </SwiperSlide>
                    ))}
                    <SwiperSlide className="d-flex align-items-center h-auto">
                        <SeeMoreSlide type={type} category={category} />
                    </SwiperSlide>
                </>
            )}
        </Swiper>
    );
};

export default MovieSwiper;
