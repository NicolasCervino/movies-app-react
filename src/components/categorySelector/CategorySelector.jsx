import "./category-selector.css";

const CategorySelector = ({ options, category, setCategory }) => {
    // Change category and hash on select change
    const handleSelectChange = (e) => {
        setCategory(e.target.value);
        window.location.hash = "#" + e.target.value;
    };

    return (
        <div className="category-select">
            <select onChange={(e) => handleSelectChange(e)} defaultValue={category}>
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
