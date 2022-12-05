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
        <div className="container">
            <div className="row px-2">
                {movies.map((m) => (
                    <MovieCard key={m.id} element={m} type={"movies"} />
                ))}
            </div>
        </div>
    );
};

export default Home;
