import { useState } from "react";
import Api from "../../service/api";
import MovieCard from "../movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";

function InfiniteCardScroll({ elements, setElements, type, category, genreId, totalPages }) {
    const [page, setpage] = useState(2);

    const [hasMore, sethasMore] = useState(true);

    const fetchData = async () => {
        if (page <= totalPages && page <= 500 && category) {
            Api.getByCategory(category, type, page).then((data) => {
                setpage(page + 1);
                setElements(elements.concat(data.results));
            });
        } else if (page <= totalPages && page <= 500 && genreId) {
            Api.getByGenre(type, genreId, page).then((data) => {
                setpage(page + 1);
                setElements(elements.concat(data.results));
            });
        } else {
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
                    <MovieCard element={e} type={type} />
                </div>
            ))}
        </InfiniteScroll>
    );
}

export default InfiniteCardScroll;
