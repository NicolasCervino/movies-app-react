import { useMyList } from "../../context/ListContext";
import CategorySelector from "../home/categorySelector/CategorySelector";
import { useState } from "react";
import MyListElements from "./myListElements/MyListElements";
import { Helmet } from "react-helmet";

const MyList = () => {
    const { moviesList, showsList } = useMyList();
    const [category, setCategory] = useState("movie");

    return (
        <>
            <Helmet>
                <title>MoviesApp | Mi Lista</title>
            </Helmet>
            <CategorySelector category={category} setCategory={setCategory} />
            <div className="row text-white">
                {category === "movie" ? (
                    <h2 className="text-center">Peliculas en mi lista:</h2>
                ) : (
                    <h2 className="text-center">Series en mi lista:</h2>
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
