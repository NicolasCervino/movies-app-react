import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";
import Api from "../../service/api";

const MovieInfo = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const [show, setShow] = useState(true);

    const location = useLocation();

    const handleClose = () => {
        setShow(false);
        if (location.state !== null) {
            navigate(-1);
        } else {
            navigate("/movies");
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        const addMovieInfo = (data) => {
            let movie = data;
            let director = data.credits.crew.find((crewMember) => crewMember.job == "Director");
            director = director?.name || null;
            movie.director = director;
            return movie;
        };

        Api.getData(id, "movie")
            .then((response) => {
                const movie = addMovieInfo(response.data);
                setMovie(movie);
            })
            .catch(() => {
                navigate("/error");
            });
    }, [id]);

    return (
        movie && (
            <CustomModal show={show} handleClose={handleClose} size="lg">
                <ModalContent element={movie} type={"movie"} handleClose={handleClose} />
            </CustomModal>
        )
    );
};

export default MovieInfo;
