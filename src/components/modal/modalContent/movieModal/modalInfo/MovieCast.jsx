import React from "react";
import { useTranslation } from "react-i18next";

const MovieCast = ({ element }) => {
    const [t, i18n] = useTranslation("global")

    return (
        <div className="col-12 col-lg-4 px-2">
            <span style={{ color: "#777" }}>{t("modal-info.cast")}</span>
            <ul className="px-3">
                {element.credits.cast.slice(0, 3).map((a) => (
                    <li key={a.id}>
                        <span>{a.name}: </span>
                        <span style={{ color: "var(--main-color)" }}>{a.character}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieCast;
