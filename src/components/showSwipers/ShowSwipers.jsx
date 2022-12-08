import { useState, useEffect } from "react";
import MovieSwiper from "../swiper/MovieSwiper";
import Api from "../../service/api";

const ShowSwipers = () => {
    const [shows, setShows] = useState([]);

    const [topShows, setTopShows] = useState([]);

    useEffect(() => {
        Api.getPopularShows()
            .then((data) => {
                setShows(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        Api.getTopShows()
            .then((data) => {
                setTopShows(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="row px-2">
            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Series Populares:</h3>
                <MovieSwiper elements={shows} type="shows"></MovieSwiper>
            </div>

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Mejor valoradas:</h3>
                <MovieSwiper elements={topShows} type="shows"></MovieSwiper>
            </div>
        </div>
    );
};

export default ShowSwipers;