import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from "../../service/api";

import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("q"));
    const [elements, setElements] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setQuery(searchParams.get("q"));
        setLoading(true);
        if (query !== null) {
            Api.getSearch("movie", query)
                .then((data) => {
                    setTotalPages(data.total_pages);
                    setElements(data.results);
                })
                .finally(setLoading(false));
        }
    }, [searchParams.get("q"), query]);

    // const fetchData = async () => {
    //     if (page <= totalPages && page <= 500) {
    //         Api.getSearch("movie", query, page).then((data) => {
    //             setpage(page + 1);
    //             setElements(elements.concat(data.results));
    //         });
    //     } else if (page > totalPages || page > 500) {
    //         sethasMore(false);
    //     }
    // };

    return (
        <div>
            {!query ? (
                <h1 className="text-white">No hay resultados de busqueda</h1>
            ) : (
                <>
                    <h1 className="text-white">
                        Resultados para:
                        <span> {decodeURI(query)}</span>
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
