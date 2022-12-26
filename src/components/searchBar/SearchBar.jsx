import { useState } from "react";
import "./search-bar.css";
import { useNavigate, createSearchParams } from "react-router-dom";

const SearchBar = () => {
    const [active, setActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const handleEnter = (e) => {
        if (e.key === "Enter" && searchQuery.trim() !== "") {
            navigate({
                pathname: "search",
                search: `?${createSearchParams({ q: encodeURI(searchQuery) })}`,
            });
        }
    };

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
                <input
                    type="text"
                    spellCheck={false}
                    placeholder="Busqueda"
                    value={searchQuery}
                    onKeyDown={handleEnter}
                    onChange={handleInputChange}
                />
            </div>
            <span className={active ? "clear" : "d-none"} onClick={clearText}></span>
        </div>
    );
};

export default SearchBar;
