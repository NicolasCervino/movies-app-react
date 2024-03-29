import { useState } from "react";
import "./search-bar.css";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [t, i18n] = useTranslation("global")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate({
        pathname: "search",
        search: `?${createSearchParams({ type: "movie", q: encodeURI(searchQuery) })}`,
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
      <form onSubmit={handleSubmit}>
        <div className={active ? "input" : "d-none"}>
          <input type="text" spellCheck={false} placeholder={t("searchbar.placeholder")} value={searchQuery} onChange={handleInputChange} />
        </div>
      </form>
      <span className={active ? "clear" : "d-none"} onClick={clearText}></span>
    </div>
  );
};

export default SearchBar;
