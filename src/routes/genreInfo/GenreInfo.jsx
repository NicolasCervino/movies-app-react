import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../service/api";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";
import CategorySelector from "../../components/categorySelector/CategorySelector";

const GenreInfo = () => {
    const { type, genreName } = useParams();
    const [elements, setElements] = useState([]);
    const [genreId, setGenreId] = useState(null);

    const [totalPages, setTotalPages] = useState();

    const [options, setOptions] = useState([]);

    useEffect(() => {
        Api.getGenres(type).then((data) => {
            const genres = data.genres.map((g) => ({ id: g.id, name: g.name.replace(/\s+/g, "").toLowerCase() }));
            const id = genres.find((g) => g.name === genreName)?.id;
            setGenreId(id);
            setOptions(
                data.genres.map((g) => ({
                    value: g.name.replace(/\s+/g, "").toLowerCase(),
                    label: g.name,
                }))
            );

            Api.getByGenre(type, id).then((data) => {
                setTotalPages(data.total_pages);
                setElements(data.results);
            });
        });
    }, [type, genreName]);

    return (
        <>
            <div className="row">
                <div className="col-12 category-selector py-3 px-2 justify-content-center justify-content-sm-between ">
                    <CategorySelector options={options} genre={[type, genreName]} />
                </div>
            </div>

            <div className="row">
                {genreId && (
                    <InfiniteCardScroll
                        elements={elements}
                        setElements={setElements}
                        type={[type, "genre", genreId]}
                        totalPages={totalPages}
                    />
                )}
            </div>
        </>
    );
};

export default GenreInfo;
