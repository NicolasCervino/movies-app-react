import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>MoviesApp | Not Found</title>
            </Helmet>
            <div className="d-flex align-items-center justify-content-center" style={{ color: "#fff", height: "100vh" }}>
                <div style={{ borderRight: "2px solid", fontSize: "26px", padding: "0 15px 0 15px" }}>404 </div>
                <div style={{ padding: "10px" }}>Not Found</div>
            </div>
        </>
    );
};

export default NotFound;
