import "./category-selector.css";

const CategorySelector = ({ category, setCategory }) => {
    const handleSetMovies = () => {
        setCategory("movie");
    };

    const handleSetShows = () => {
        setCategory("tv");
    };

    return (
        <div className="col-12 category-selector py-3 px-2 justify-content-center justify-content-sm-start">
            <a className={`category-selector--link ${category === "movie" ? "active-category" : ""}`} onClick={handleSetMovies}>
                <h3 value={"movie"}>Peliculas</h3>
            </a>
            <a className={`category-selector--link ${category === "tv" ? "active-category" : ""}`} onClick={handleSetShows}>
                <h3>Series</h3>
            </a>
        </div>
    );
};

export default CategorySelector;
