import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useModal = (navigatePath) => {
    const [show, setShow] = useState(true);

    const location = useLocation();
    const navigate = useNavigate();

    function handleClose() {
        setShow(false);
        if (location.state !== null) {
            navigate(-1);
        } else {
            navigate(navigatePath);
        }
    }

    return [show, handleClose];
};
export default useModal;
