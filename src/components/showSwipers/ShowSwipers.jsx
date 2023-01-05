import { useState, useEffect } from "react";
import MovieSwiper from "../swiper/MovieSwiper";
import Api from "../../service/api";
import { useAuth } from "../../context/AuthContext";
import { useMyList } from "../../context/ListContext";

const ShowSwipers = () => {
    const [shows, setShows] = useState(null);
    const [topShows, setTopShows] = useState(null);

    const { user } = useAuth();
    const { showsList } = useMyList();

    useEffect(() => {
        Api.getPopular("tv")
            .then((data) => {
                setShows(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        Api.getTop("tv")
            .then((data) => {
                setTopShows(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="row px-2">
            {user && showsList.length > 0 && (
                <div className="col-12 justify-content-center p-2">
                    <h3 className="text-white text-uppercase">Series en Mi lista:</h3>
                    <MovieSwiper elements={showsList} type="tv"></MovieSwiper>
                </div>
            )}
            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Series Populares:</h3>
                <MovieSwiper elements={shows} type="tv" category={"popular"}></MovieSwiper>
            </div>

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">Mejor valoradas:</h3>
                <MovieSwiper elements={topShows} type="tv" category={"top_rated"}></MovieSwiper>
            </div>
        </div>
    );
};

export default ShowSwipers;
