import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import "./scroll-to-top.css";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVissibility = () => {
        if (window.scrollY > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVissibility);

        return () => {
            window.removeEventListener("scroll", toggleVissibility);
        };
    }, []);

    const scroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={visible ? "scroll-to-top" : "opacity-0"}>
            <button className={"btn btn-danger"} onClick={scroll}>
                <FontAwesomeIcon icon={faAnglesUp} />
            </button>
        </div>
    );
};

export default ScrollToTop;
