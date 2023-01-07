import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { MyListProvider } from "./context/ListContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./routes/home/Home";
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
import Search from "./routes/search/Search";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ProtectedRoute from "./routes/protectedRoute/ProtectedRoute";
import Profile from "./routes/profile/Profile";
import ResetPassword from "./routes/resetPassword/ResetPassword";
import NotLoggedIn from "./routes/protectedRoute/NotLoggedIn";

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <div className="App">
            <AuthProvider>
                <MyListProvider>
                    <Routes location={background || location}>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Navigate replace to="home" />} />
                            <Route path="home" element={<Home />}>
                                <Route
                                    path="login"
                                    element={
                                        <NotLoggedIn>
                                            <Login />
                                        </NotLoggedIn>
                                    }
                                />
                                <Route
                                    path="register"
                                    element={
                                        <NotLoggedIn>
                                            <Register />
                                        </NotLoggedIn>
                                    }
                                />
                                <Route
                                    path="profile"
                                    element={
                                        <ProtectedRoute redirect={"/home/login"}>
                                            <Profile />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="reset-password"
                                    element={
                                        <NotLoggedIn>
                                            <ResetPassword />
                                        </NotLoggedIn>
                                    }
                                />
                            </Route>
                            <Route
                                path="my-list"
                                element={
                                    <ProtectedRoute redirect={"/home/login"}>
                                        <MyList />
                                    </ProtectedRoute>
                                }
                            />

                            <Route path="movies" element={<Movies />}>
                                <Route path=":id" element={<MovieInfo />} />
                            </Route>

                            <Route path="tv-shows" element={<Shows />}>
                                <Route path=":id" element={<ShowInfo />} />
                            </Route>

                            <Route path="search" element={<Search />} />
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
                            <Route
                                path="home/login"
                                element={
                                    <NotLoggedIn>
                                        <Login />
                                    </NotLoggedIn>
                                }
                            />
                            <Route
                                path="home/register"
                                element={
                                    <NotLoggedIn>
                                        <Register />
                                    </NotLoggedIn>
                                }
                            />
                            <Route
                                path="home/profile"
                                element={
                                    <ProtectedRoute redirect={"/home/login"}>
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />
                        </Routes>
                    )}
                </MyListProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
