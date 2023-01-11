import { useState, useEffect } from "react";
import Api from "../service/api";

const useRandomPage = (category, type) => {
    const [page, setPage] = useState(null);

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    useEffect(() => {
        Api.getByCategory(category, type)
            .then((data) => {
                // Page cant be bigger than 500
                setPage(getRandomInt(1, Math.min(data.total_pages, 500)));
            })
            .catch((error) => console.log(error));
    }, [category, type]);

    return page;
};
export default useRandomPage;
