import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomModal from "../../components/modal/CustomModal";
import ModalContent from "../../components/modal/modalContent/ModalContent";
import Api from "../../service/api";

const ShowInfo = () => {
    const { id } = useParams();
    const [tvShow, setTvShow] = useState(null);

    const [show, setShow] = useState(true);

    const navigate = useNavigate();

    const handleClose = () => {
        setShow(false);
        navigate(-1);
    };

    useEffect(() => {
        const addShowInfo = (data) => {
            let show = data;
            let director = data.credits.crew.find((crewMember) => crewMember.known_for_department == "Directing");
            director = director?.name || null;
            show.director = director;
            return show;
        };

        Api.getData(id, "tv")
            .then((response) => {
                const show = addShowInfo(response.data);
                setTvShow(show);
            })
            .catch(() => {
                navigate("/error");
            });
    }, [id]);

    return (
        tvShow && (
            <CustomModal show={show} handleClose={handleClose}>
                <ModalContent element={tvShow} type={"tv"} handleClose={handleClose} />
            </CustomModal>
        )
    );
};

export default ShowInfo;
