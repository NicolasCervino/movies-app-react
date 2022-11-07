import Navbar from "../components/navbar/NavBar";
import FeaturedMovies from "../components/featuredMovies/FeaturedMovies";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="container-fluid">
                <Navbar />
            </header>
            <main className="container-fluid p-0">
                <FeaturedMovies />
                <section>
                    <Outlet />
                </section>
            </main>
        </>
    );
};

export default Layout;
