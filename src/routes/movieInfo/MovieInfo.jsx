import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomModal from "../../components/modal/CustomModal";
import MovieModal from "../../components/modal/modalContent/movieModal/MovieModal";
import Api from "../../service/api";
import useModal from "../../hooks/useModal";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const MovieInfo = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const [show, handleClose] = useModal("/movies");

    const navigate = useNavigate();

    const { i18n } = useTranslation();

    useEffect(() => {
        const addMovieInfo = (data) => {
            let movie = data;
            let director = data.credits.crew.find((crewMember) => crewMember.job == "Director");
            director = director?.name || null;
            movie.director = director;
            return movie;
        };

        Api.getData(id, "movie", i18n.language)
            .then((response) => {
                const movie = addMovieInfo(response.data);
                setMovie(movie);
            })
            .catch(() => {
                navigate("/error");
            });
    }, [id, i18n.language]);

    return (
        movie && (
            <>
                <Helmet>
                    <title>{`MoviesApp | ${movie.title}`}</title>
                </Helmet>
                <CustomModal show={show} handleClose={handleClose} size="lg">
                    <MovieModal element={movie} type={"movie"} handleClose={handleClose} />
                </CustomModal>
            </>
        )
    );
};

export default MovieInfo;
