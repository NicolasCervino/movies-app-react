import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

function NotLoggedIn({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <h1>Loading</h1>;

    if (user) return <Navigate to={"/"} />;

    return <>{children}</>;
}

export default NotLoggedIn;
