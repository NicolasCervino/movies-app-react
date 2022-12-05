import { MyListContext } from "../../../context/ListContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const MovieCardButton = ({ movie, type }) => {
    const { addMovie, removeMovie, movieOnList, addShow, removeShow, showOnList } = useContext(MyListContext);

    const handleAdd = () => {
        switch (type) {
            case "movies":
                addMovie(movie);
                break;
            case "shows":
                addShow(movie);
                break;
        }
    };

    const handleRemove = () => {
        switch (type) {
            case "movies":
                removeMovie(movie);
                break;
            case "shows":
                removeShow(movie);
                break;
        }
    };

    return (
        <>
            <button
                className={"btn d-none position-absolute top-50 start-50 translate-middle rounded-circle text-white"}
                onClick={movieOnList(movie) || showOnList(movie) ? handleRemove : handleAdd}
                style={{ background: "#141619cf", zIndex: 999 }}
            >
                {movieOnList(movie) || showOnList(movie) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
            </button>
        </>
    );
};

export default MovieCardButton;
