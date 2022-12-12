import React from "react";

const MovieTrailer = ({ element }) => {
    return element.videos.results[0] ? (
        <div className="col-12 col-sm-9 col-lg-8 pb-3">
            <div className="ratio ratio-16x9">
                <iframe src={`https://www.youtube.com/embed/${element.videos.results[0]?.key}`} title="YouTube video player"></iframe>
            </div>
        </div>
    ) : (
        ""
    );
};

export default MovieTrailer;
