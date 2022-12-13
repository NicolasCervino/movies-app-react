import Navbar from "../components/navbar/NavBar";
import FeaturedMovies from "../components/featuredMovies/FeaturedMovies";
import { Outlet, useLocation } from "react-router-dom";
import FeaturedShows from "../components/featuredShows/FeaturedShows";

const Layout = () => {
    let location = useLocation();

    return (
        <>
            <header className="container-fluid p-0">
                <Navbar />
            </header>
            <section className="container-fluid p-0">
                {location.pathname.startsWith("/tv-show") ? <FeaturedShows /> : <FeaturedMovies />}
            </section>
            <main className="container">
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
