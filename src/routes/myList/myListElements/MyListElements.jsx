import MovieCard from "../../../components/movieCard/MovieCard";

function MyListElements({ elements, type }) {
    if (elements.length === 0) {
        return <h3>La lista esta vacia...</h3>;
    }

    return elements.map((e) => (
        <div className="col-6 col-sm-3 col-xl-2 p-2" key={e.id}>
            <MovieCard element={e} type={type} />
        </div>
    ));
}

export default MyListElements;
