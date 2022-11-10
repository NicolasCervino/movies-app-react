import { useState, useEffect } from "react";
import Api from "../../service/api";
import MainCarrousel from "../carrousel/mainCarrousel/MainCarrousel";

const FeaturedShows = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        Api.getPopularShows()
            .then((data) => {
                const shows = data.results.filter((s) => s.backdrop_path !== null && s.overview !== "");
                setShows(shows);
            })
            .catch((error) => console.log(error));
    }, []);

    return <MainCarrousel movies={shows} type={"shows"} size={5}></MainCarrousel>;
};

export default FeaturedShows;
