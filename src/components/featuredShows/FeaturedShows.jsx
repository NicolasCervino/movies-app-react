import { useState, useEffect } from "react";
import Api from "../../service/api";
import LoadingCarrousel from "../loaders/loadingCarrousel/LoadingCarrousel";
import MainCarrousel from "../carrousel/mainCarrousel/MainCarrousel";

const FeaturedShows = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        Api.getTop("tv")
            .then((data) => {
                const shows = data.results.filter((s) => s.backdrop_path !== null && s.overview !== "");
                setShows(shows);
            })
            .catch((error) => console.log(error))
            .finally(setTimeout(() => setLoading(false), 1000));
    }, []);

    return loading ? <LoadingCarrousel /> : <MainCarrousel movies={shows} type={"tv"} size={5} />;
};

export default FeaturedShows;
