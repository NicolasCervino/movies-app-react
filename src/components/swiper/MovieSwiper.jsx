import { Navigation, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../movieCard/MovieCard";
import SeeMoreSlide from "./seeMoreSlide/SeeMoreSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const MovieSwiper = ({ movies, type }) => {
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
            {movies.map((m) => (
                <SwiperSlide className="h-auto" key={m.id}>
                    <MovieCard element={m} type={type} />
                </SwiperSlide>
            ))}
            <SwiperSlide className="d-flex align-items-center h-auto">
                <SeeMoreSlide type={type} />
            </SwiperSlide>
        </Swiper>
    );
};

export default MovieSwiper;
