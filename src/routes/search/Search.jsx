import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../../service/api";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";
import CategorySelector from "../home/categorySelector/CategorySelector";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));
  const [elements, setElements] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState(searchParams.get("type"));
  
  const [t, i18n] = useTranslation("global")
  
  // Update the query state when the searchParams change
  useEffect(() => {
    setQuery(searchParams.get("q"));
    setCategory(searchParams.get("type"));
  }, [searchParams]);

  useEffect(() => {
    if (query !== null) {
      Api.getSearch(category, query, 1).then((data) => {
        setTotalPages(data.total_pages);
        setElements(data.results);
      });
    }
  }, [query, category]);

  useEffect(() => {
    setSearchParams({ type: category, q: query });
  }, [category]);

  return (
    <>
      <Helmet>
        <title>
          MoviesApp |{" "}
          {!query || elements.length === 0 ? t("search.empty-header") : `${elements.length} ${t("search.results-header")} ${decodeURI(query)}`}
        </title>
      </Helmet>
      <div className="row">
        <CategorySelector category={category} setCategory={setCategory} search={true} />
        {!query || elements.length === 0 ? (
          <h1 className="text-white">{t("search.empty")}</h1>
        ) : (
          <>
            <h1 className="text-white">
              {t("search.results")}
              <span style={{ color: "var(--main-color)" }}> {decodeURI(query)}</span>
            </h1>
            <div className="row">
              <InfiniteCardScroll
                elements={elements}
                setElements={setElements}
                type={[category, "search", query]}
                totalPages={totalPages}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
