import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useModal = () => {
    const [show, setShow] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    function handleClose() {
        setShow(false);
        if (location.state !== null) {
            navigate(-1);
        } else {
            navigate("/home");
        }
    }

    return [show, handleClose];
};
export default useModal;
