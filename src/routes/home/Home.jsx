import { useState } from "react";
import CategorySelector from "./categorySelector/CategorySelector";
import MovieSwipers from "../../components/movieSwipers/MovieSwipers";
import ShowSwipers from "../../components/showSwipers/ShowSwipers";
import { Outlet } from "react-router-dom";

const Home = () => {
    const [category, setCategory] = useState("movie");

    return (
        <>
            <CategorySelector category={category} setCategory={setCategory} />
            {category === "movie" ? <MovieSwipers /> : <ShowSwipers />}
            <Outlet />
        </>
    );
};

export default Home;
