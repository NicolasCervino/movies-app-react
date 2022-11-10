import { Routes, Route, Navigate } from "react-router-dom";
import { MyListProvider } from "./context/ListContext";
import Home from "./routes/home/Home";
import "./App.css";
import "./assets/scss/main.css";
import Layout from "./layout/Layout";
import MyList from "./routes/myList/MyList";
import Movies from "./routes/movies/Movies";
import NotFound from "./routes/404/NotFound";
import MovieInfo from "./routes/movieInfo/MovieInfo";

function App() {
    return (
        <div className="App">
            <MyListProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Navigate replace to="home" />} />
                        <Route path="home" element={<Home />} />
                        <Route path="my-list" element={<MyList />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="movie/:id" element={<MovieInfo />} />
                        <Route path="tv-shows" element={<h1>Tv Shows</h1>} />
                        <Route path="tv-show/:id" element={<h1>Tv Shows</h1>} />
                        <Route path="search" element={<h1>Hello World</h1>} />
                        <Route path="genres" element={<h1>Hello World</h1>} />
                        <Route path="genre/:genreName" element={<h1>Hello World</h1>} />
                    </Route>
                    <Route path="*" element={<Navigate replace to="/error" />} />
                    <Route path="error" element={<NotFound></NotFound>} />
                </Routes>
            </MyListProvider>
        </div>
    );
}

export default App;
