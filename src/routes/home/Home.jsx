import { useState } from "react";
import CategorySelector from "./categorySelector/CategorySelector";
import MovieSwipers from "../../components/movieSwipers/MovieSwipers";
import ShowSwipers from "../../components/showSwipers/ShowSwipers";

const Home = () => {
    const [category, setCategory] = useState("movies");

    return (
        <div className="container">
            <CategorySelector category={category} setCategory={setCategory} />
            {category === "movies" ? <MovieSwipers /> : <ShowSwipers />}
        </div>
    );
};

export default Home;
