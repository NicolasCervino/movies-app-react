import React from "react";

const MovieCast = ({ element }) => {
    return (
        <div className="col-12 col-sm-4 px-2">
            <span style={{ color: "#777" }}> Elenco: </span>
            <ul className="px-3">
                <li>{element.credits.cast[0] ? element.credits.cast[0].name : "no hay datos"}</li>
                <li>{element.credits.cast[1] ? element.credits.cast[1].name : "no hay datos"}</li>
                <li>{element.credits.cast[2] ? element.credits.cast[2].name : "no hay datos"}</li>
            </ul>
        </div>
    );
};

export default MovieCast;
