import { useState } from "react";
import Api from "../../service/api";
import MovieCard from "../movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import ActorCard from "../actorCard/ActorCard";
import { useTranslation } from "react-i18next";


function InfiniteCardScroll({ elements, setElements, type, totalPages }) {
    const [page, setpage] = useState(2);
    const [hasMore, sethasMore] = useState(true);
    const { i18n } = useTranslation();

    // Posible types
    // type = ["movie/tv", "category/genre/search", category/genreId,query]
    const fetchData = async () => {
        if (page <= totalPages && page <= 500) {
            switch (type[1]) {
                case "category":
                    Api.getByCategory(type[2], type[0], page, i18n.language).then((data) => {
                        setpage(page + 1);
                        setElements(elements.concat(data.results));
                    });
                    break;
                case "genre":
                    Api.getByGenre(type[0], type[2], page, i18n.language).then((data) => {
                        setpage(page + 1);
                        setElements(elements.concat(data.results));
                    });
                    break;
                case "search":
                    Api.getSearch(type[0], type[2], page, i18n.language).then((data) => {
                        setpage(page + 1);
                        setElements(elements.concat(data.results));
                    });
                    break;
            }
        } else if (page > totalPages || page > 500) {
            sethasMore(false);
        }
    };

    return (
        <InfiniteScroll
            dataLength={elements.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p className="text-white" style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
            className="row"
        >
            {elements.map((e) => (
                <div className="col-6 col-sm-3 col-xl-2 p-2" key={e.id}>
                    {type[0] === "person" ? <ActorCard person={e} /> : <MovieCard element={e} type={type[0]} />}
                </div>
            ))}
        </InfiniteScroll>
    );
}

export default InfiniteCardScroll;
