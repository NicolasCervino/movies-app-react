import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MyListProvider } from "./context/ListContext";
import Home from "./routes/home/Home";
import "./App.css";
import "./assets/scss/main.css";
import Layout from "./layout/Layout";
import MyList from "./routes/myList/MyList";
import Movies from "./routes/movies/Movies";
import NotFound from "./routes/404/NotFound";
import MovieInfo from "./routes/movieInfo/MovieInfo";
import ShowInfo from "./routes/showInfo/ShowInfo";
import Shows from "./routes/shows/Shows";
import Genres from "./routes/genres/Genres";
import GenreInfo from "./routes/genreInfo/GenreInfo";

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <div className="App">
            <MyListProvider>
                <Routes location={background || location}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Navigate replace to="home" />} />
                        <Route path="home" element={<Home />} />
                        <Route path="my-list" element={<MyList />} />

                        <Route path="movies" element={<Movies />}>
                            <Route path=":id" element={<MovieInfo />} />
                        </Route>

                        <Route path="tv-shows" element={<Shows />}>
                            <Route path=":id" element={<ShowInfo />} />
                        </Route>

                        <Route path="search" element={<h1>Hello World</h1>} />
                        <Route path="genres" element={<Genres />} />
                        <Route path="genre/:type/:genreName" element={<GenreInfo />} />
                    </Route>
                    <Route path="*" element={<Navigate replace to="/error" />} />
                    <Route path="error" element={<NotFound></NotFound>} />
                </Routes>
                {background && (
                    <Routes>
                        <Route path="movies/:id" element={<MovieInfo />} />
                        <Route path="tv-shows/:id" element={<ShowInfo />} />
                    </Routes>
                )}
            </MyListProvider>
        </div>
    );
}

export default App;
