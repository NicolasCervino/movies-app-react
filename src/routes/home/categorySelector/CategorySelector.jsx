import "./category-selector.css";

const CategorySelector = ({ category, setCategory }) => {
    const handleSetMovies = () => {
        setCategory("movies");
    };

    const handleSetShows = () => {
        setCategory("shows");
    };

    return (
        <div className="col-12 category-selector py-3 px-2">
            <a className={`category-selector--link ${category === "movies" ? "active-category" : ""}`} onClick={handleSetMovies}>
                <h3 value={"movies"}>Peliculas</h3>
            </a>
            <a className={`category-selector--link ${category === "shows" ? "active-category" : ""}`} onClick={handleSetShows}>
                <h3>Series</h3>
            </a>
        </div>
    );
};

export default CategorySelector;
