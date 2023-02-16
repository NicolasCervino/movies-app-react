import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../../service/api";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";
import CategorySelector from "../home/categorySelector/CategorySelector";
import { Helmet } from "react-helmet";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q"));
  const [elements, setElements] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState(searchParams.get("type"));

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
          {!query || elements.length === 0 ? "No hay resultados de busqueda" : `${elements.length} resultado/s para: ${decodeURI(query)}`}
        </title>
      </Helmet>
      <div className="row">
        <CategorySelector category={category} setCategory={setCategory} search={true} />
        {!query || elements.length === 0 ? (
          <h1 className="text-white">No hay resultados...</h1>
        ) : (
          <>
            <h1 className="text-white">
              Resultados para:
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
