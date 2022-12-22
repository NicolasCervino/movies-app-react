import { useNavigate } from "react-router-dom";
import "./category-selector.css";

const CategorySelector = ({ options, category, setCategory, genre }) => {
    const navigate = useNavigate();

    // Change category and hash on select change
    const handleSelectChange = (e) => {
        if (category) {
            setCategory(e.target.value);
            window.location.hash = "#" + e.target.value;
        } else if (genre) {
            navigate(`/genre/${genre[0]}/${e.target.value}`);
        }
    };

    return (
        <div className="category-select">
            <select onChange={(e) => handleSelectChange(e)} defaultValue={category || genre[1]}>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySelector;
