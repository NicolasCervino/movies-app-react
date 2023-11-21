import "./category-selector.css";
import { useTranslation } from "react-i18next";

const CategorySelector = ({ category, setCategory, search }) => {
    const [t, i18n] = useTranslation("global")

    const handleSetMovies = () => {
        setCategory("movie");
    };

    const handleSetShows = () => {
        setCategory("tv");
    };

    const handleSetActors = () => {
        setCategory("person");
    };

    return (
        <div className="col-12 category-selector py-3 px-2 justify-content-center justify-content-sm-start">
            <a className={`category-selector--link ${category === "movie" ? "active-category" : ""}`} onClick={handleSetMovies}>
                <h3 value={"movie"}>{t("navbar.movies")}</h3>
            </a>
            <a className={`category-selector--link ${category === "tv" ? "active-category" : ""}`} onClick={handleSetShows}>
                <h3>{t("navbar.shows")}</h3>
            </a>
            {search && (
                <a className={`category-selector--link ${category === "person" ? "active-category" : ""}`} onClick={handleSetActors}>
                    <h3>{t("category-selector.actors")}</h3>
                </a>
            )}
        </div>
    );
};

export default CategorySelector;
