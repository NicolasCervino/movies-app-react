import MainCarrouselItem from "../mainCarrouselItem/MainCarrouselItem";
import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const MainCarrousel = ({ movies, size }) => {
    const [showingMovies, setShowingMovies] = useState([]);

    useEffect(() => {
        const shuffleMovies = (peliculas) => {
            let shuffled = peliculas
                .map((movie) => ({ movie, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ movie }) => movie);
            return shuffled;
        };

        if (movies.length > size) {
            let mixedMovies = shuffleMovies(movies);
            setShowingMovies(mixedMovies.slice(0, size));
        } else {
            let mixedMovies = shuffleMovies(movies);
            setShowingMovies(mixedMovies);
        }
    }, [movies]);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {showingMovies.map((movie) => {
                return (
                    <Carousel.Item key={movie.id}>
                        <MainCarrouselItem movie={movie}></MainCarrouselItem>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default MainCarrousel;
