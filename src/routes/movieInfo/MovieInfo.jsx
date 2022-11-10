import { useParams, useNavigate, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomModal from "../../components/modal/CustomModal";
import Api from "../../service/api";

const MovieInfo = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        navigate("/movies");
    };

    const navigate = useNavigate();

    useEffect(() => {
        Api.getMovieData(id)
            .then((response) => {
                setMovie(response.data);
            })
            .catch((error) => {
                navigate("/error");
            });
    }, [id]);

    return movie && <CustomModal show={show} handleClose={handleClose} movie={movie} type={"movies"}></CustomModal>;
};

export default MovieInfo;
