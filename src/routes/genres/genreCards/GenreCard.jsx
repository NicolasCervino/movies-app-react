import { useState, useEffect } from "react";
import Api from "../../../service/api";
import MovieCard from "../../../components/movieCard/MovieCard";

const GenreCard = ({ genre, category }) => {
    const [element, setElement] = useState("");

    useEffect(() => {
        Api.getByGenre(category, genre.id).then((data) => {
            setElement(data.results.find((m) => m.genre_ids[0] === genre.id && m.backdrop_path !== null));
        });
    }, [genre]);

    return (
        <div className="col-6 col-sm-3 col-xl-3 p-2">
            <MovieCard element={element} type={"genre"} genreName={genre.name} category={category} />
        </div>
    );
};

export default GenreCard;
