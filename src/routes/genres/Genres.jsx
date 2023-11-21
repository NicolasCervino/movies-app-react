import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Api from "../../service/api";
import CategorySelector from "../home/categorySelector/CategorySelector";
import GenreCard from "./genreCards/GenreCard";
import { useTranslation } from "react-i18next";

const Genres = () => {
    const [genres, setGenres] = useState([]);
    const [category, setCategory] = useState("movie");
    const { i18n } = useTranslation();

    useEffect(() => {
        Api.getGenres(category, i18n.language).then((data) => {
            setGenres(data.genres);
        });
    }, [category, i18n.language]);

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
