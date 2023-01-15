import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Api from "../../service/api";
import CategorySelector from "../home/categorySelector/CategorySelector";
import GenreCard from "./genreCards/GenreCard";

const Genres = () => {
    const [genres, setGenres] = useState([]);
    const [category, setCategory] = useState("movie");

    useEffect(() => {
        Api.getGenres(category).then((data) => {
            setGenres(data.genres);
        });
    }, [category]);

    return (
        <>
            <Helmet>
                <title>MoviesApp | Genres</title>
            </Helmet>
            <CategorySelector category={category} setCategory={setCategory}></CategorySelector>
            <div className="row">
                {genres.map((genre) => (
                    <GenreCard key={genre.id} genre={genre} category={category} />
                ))}
            </div>
        </>
    );
};

export default Genres;
