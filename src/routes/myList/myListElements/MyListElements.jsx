import { useTranslation } from "react-i18next";
import MovieCard from "../../../components/movieCard/MovieCard";

function MyListElements({ elements, type }) {
    const [t] = useTranslation("global")

    if (elements.length === 0) {
        return <h3>{t("my-list.empty-list")}</h3>;
    }

    return elements.map((e) => (
        <div className="col-6 col-sm-3 col-xl-2 p-2" key={e.id}>
            <MovieCard element={e} type={type} />
        </div>
    ));
}

export default MyListElements;
