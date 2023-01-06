import { useState } from "react";
import Spinner from "../loaders/Spinner";

function ActorCard({ person }) {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <>
            <div className={"card movie-card position-relative"}>
                <img
                    onLoad={handleLoad}
                    src={
                        person.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                            : "https://via.placeholder.com/500x750?text=No+Image+Available"
                    }
                    loading={"lazy"}
                    className="card-img-top"
                    draggable={false}
                />

                <Spinner loading={loading} />
            </div>
            <p className="titulo-card text-white">{person.name}</p>
        </>
    );
}

export default ActorCard;
