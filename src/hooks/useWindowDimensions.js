import { useState, useEffect } from "react";

const useWindowDimensions = () => {
    const getWindowDimensions = () => {
        return { width: window.innerWidth, height: window.innerHeight };
    };

    const [isMobile, setIsMobile] = useState(getWindowDimensions().width < 575);

    const handleResize = () => {
        if (window.innerWidth < 575) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return [isMobile];
};

export default useWindowDimensions;
