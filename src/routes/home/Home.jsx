import { useState, useEffect } from "react";
import Api from "../../service/api";
import MovieCard from "../../components/movieCard/MovieCard";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        Api.getPopularMovies()
            .then((data) => {
                setMovies(data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="row px-2">
            {movies.map((m) => (
                <MovieCard key={m.id} movie={m} type={"movies"} />
            ))}
        </div>
    );
};

export default Home;
