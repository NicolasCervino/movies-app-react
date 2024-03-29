import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../../service/api";
import InfiniteCardScroll from "../../components/InfiniteScroll/InfiniteCardScroll";
import CategorySelector from "../../components/categorySelector/CategorySelector";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const GenreInfo = () => {
    const { type, genreName } = useParams();
    const [elements, setElements] = useState([]);
    const [genreId, setGenreId] = useState(null);

    const [totalPages, setTotalPages] = useState();

    const [options, setOptions] = useState([]);
    const [currentGenreName, setCurrentGenreName] = useState();

    const navigate = useNavigate();
    const { i18n } = useTranslation();

    useEffect(() => {
        //GET GENRE OPTIONS
        Api.getGenres(type, i18n.language).then((data) => {
            const id = data.genres
                .map((g) => ({ id: g.id, name: g.name.replace(/\s+/g, "").toLowerCase() }))
                .find((g) => g.name === genreName)?.id;
            if (id) {
                setGenreId(id);
                setOptions(() => {
                    const genreOptions = data.genres.map((g) => ({
                        value: g.name.replace(/\s+/g, "").toLowerCase(),
                        label: g.name,
                    }));
                    // Put current genre first
                    const current = [genreOptions.find((g) => g.value === genreName)];
                    setCurrentGenreName(current[0].label);
                    current.push(...genreOptions.filter((g) => g.value !== genreName));
                    return current;
                });

                // GET GENRE ELEMENTS
                Api.getByGenre(type, id).then((data) => {
                    setTotalPages(data.total_pages);
                    setElements(data.results);
                });
            } else {
                navigate("/");
            }
        });
    }, [type, genreName, i18n.language]);

    return (
        <>
            <Helmet>
                <title>{`MoviesApp | ${currentGenreName}`}</title>
            </Helmet>
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
