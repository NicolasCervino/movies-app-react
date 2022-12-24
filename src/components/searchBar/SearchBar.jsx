import { useState } from "react";
import "./search-bar.css";

const SearchBar = () => {
    const [active, setActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const clearText = () => {
        setSearchQuery("");
    };

    return (
        <div className={active ? "search active" : "search"}>
            <div className="icon" onClick={() => setActive(!active)}></div>
            <div className={active ? "input" : "d-none"}>
                <input type="text" spellCheck={false} placeholder="Busqueda" value={searchQuery} onChange={handleInputChange} />
            </div>
            <span className={active ? "clear" : "d-none"} onClick={clearText}></span>
        </div>
    );
};

export default SearchBar;
