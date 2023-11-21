import { useMyList } from "../../context/ListContext";
import CategorySelector from "../home/categorySelector/CategorySelector";
import { useState } from "react";
import MyListElements from "./myListElements/MyListElements";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const MyList = () => {
    const { moviesList, showsList } = useMyList();
    const [category, setCategory] = useState("movie");
    const [t] = useTranslation("global")

    return (
        <>
            <Helmet>
                <title>MoviesApp | {t("my-list.header-title")}</title>
            </Helmet>
            <CategorySelector category={category} setCategory={setCategory} />
            <div className="row text-white">
                {category === "movie" ? (
                    <h2 className="text-center">{t("my-list.movies")}</h2>
                ) : (
                    <h2 className="text-center">{t("my-list.shows")}</h2>
                )}
                {category === "movie" ? (
                    <MyListElements elements={moviesList} type="movie" />
                ) : (
                    <MyListElements elements={showsList} type="tv" />
                )}
            </div>
        </>
    );
};
export default MyList;
