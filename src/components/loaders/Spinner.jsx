function Spinner({ loading }) {
    return (
        <div className="d-flex justify-content-center bg-dark">
            <div className={`spinner-border text-danger ${!loading ? "d-none" : ""}`} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Spinner;
