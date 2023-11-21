import { useState, useEffect } from "react";
import MovieSwiper from "../swiper/MovieSwiper";
import Api from "../../service/api";
import { useAuth } from "../../context/AuthContext";
import { useMyList } from "../../context/ListContext";
import { useTranslation } from "react-i18next";

const ShowSwipers = () => {
    const [shows, setShows] = useState(null);
    const [topShows, setTopShows] = useState(null);

    const [t, i18n] = useTranslation("global")

    const { user } = useAuth();
    const { showsList } = useMyList();

    useEffect(() => {
        Api.getPopular("tv", 1, i18n.language)
            .then((data) => {
                setShows(data.results);
            })
            .catch((error) => console.log(error));
    }, [i18n.language]);

    useEffect(() => {
        Api.getTop("tv", 1, i18n.language)
            .then((data) => {
                setTopShows(data.results);
            })
            .catch((error) => console.log(error));
    }, [i18n.language]);

    const handleShowsList = () => {
        if (showsList.length >= 10) {
            return showsList.slice(0, 10);
        } else {
            return showsList;
        }
    };

    return (
        <div className="row px-2">
            {user && showsList.length > 0 && (
                <div className="col-12 justify-content-center p-2">
                    <h3 className="text-white text-uppercase">{t("show-swipers.my-list")}</h3>
                    <MovieSwiper elements={handleShowsList()} type="tv" wide={true} bigList={showsList.length >= 10}></MovieSwiper>
                </div>
            )}
            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">{t("show-swipers.populars")}</h3>
                <MovieSwiper elements={shows} type="tv" category={"popular"}></MovieSwiper>
            </div>

            <div className="col-12 justify-content-center p-2">
                <h3 className="text-white text-uppercase">{t("show-swipers.top-rated")}</h3>
                <MovieSwiper elements={topShows} type="tv" category={"top_rated"}></MovieSwiper>
            </div>
        </div>
    );
};

export default ShowSwipers;
