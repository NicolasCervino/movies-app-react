import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../../service/api";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";
import CategorySelector from "../home/categorySelector/CategorySelector";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q"));
    const [elements, setElements] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [category, setCategory] = useState("movie");

    useEffect(() => {
        setQuery(searchParams.get("q"));
        if (query !== null) {
            Api.getSearch(category, query).then((data) => {
                setTotalPages(data.total_pages);
                setElements(data.results);
            });
        }
    }, [searchParams.get("q"), query, category]);

    return (
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
    );
};

export default Search;
