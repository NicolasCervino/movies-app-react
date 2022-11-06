import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import "./assets/scss/main.css";
import Navbar from "./components/navbar/NavBar";
import FeaturedMovies from "./components/featuredMovies/FeaturedMovies";

function App() {
    return (
        <div className="App">
            <header className="container-fluid">
                <Navbar></Navbar>
            </header>
            <main className="container-fluid p-0">
                <FeaturedMovies></FeaturedMovies>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home></Home>} />
                    <Route path="/movie/:id" element={<h1>Hello World</h1>} />
                    <Route path="/search" element={<h1>Hello World</h1>} />
                    <Route path="/genres" element={<h1>Hello World</h1>} />
                    <Route path="/genre/:genreName" element={<h1>Hello World</h1>} />
                    <Route path="*" element={<h1>Not found</h1>} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
