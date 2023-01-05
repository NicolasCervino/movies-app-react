import { useMyList } from "../../../context/ListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const MovieCardButton = ({ element, type }) => {
    const { addElement, removeElement, elementOnList } = useMyList();

    const handleAdd = () => {
        addElement(element, type);
    };

    const handleRemove = () => {
        removeElement(element, type);
    };

    return (
        <>
            <button
                className={"btn d-none position-absolute top-50 start-50 translate-middle rounded-circle text-white"}
                onClick={elementOnList(element, type) ? handleRemove : handleAdd}
                style={{ background: "#141619cf", zIndex: 999 }}
            >
                {elementOnList(element, type) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />}
            </button>
        </>
    );
};

export default MovieCardButton;
