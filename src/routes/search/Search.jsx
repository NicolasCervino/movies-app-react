import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../../service/api";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q"));
    const [elements, setElements] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setQuery(searchParams.get("q"));
        if (query !== null) {
            Api.getSearch("movie", query).then((data) => {
                setTotalPages(data.total_pages);
                setElements(data.results);
            });
        }
    }, [searchParams.get("q"), query]);

    return (
        <div className="row">
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
                            type={["movie", "search", query]}
                            totalPages={totalPages}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default Search;
