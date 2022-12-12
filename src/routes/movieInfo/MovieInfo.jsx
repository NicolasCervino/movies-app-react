import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";
import Api from "../../service/api";

const MovieInfo = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        //navigate("/movies");
        navigate(-1);
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
            <CustomModal show={show} handleClose={handleClose}>
                <ModalContent element={movie} type={"movies"} handleClose={handleClose} />
            </CustomModal>
        )
    );
};

export default MovieInfo;
