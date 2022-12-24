import Navbar from "../components/navbar/NavBar";
import FeaturedMovies from "../components/featuredMovies/FeaturedMovies";
import { Outlet, useLocation } from "react-router-dom";
import FeaturedShows from "../components/featuredShows/FeaturedShows";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const Layout = () => {
    let location = useLocation();

    return (
        <>
            <header className="container-fluid p-0">
                <Navbar />
            </header>
            <section className="container-fluid p-0">{location.pathname.includes("/tv") ? <FeaturedShows /> : <FeaturedMovies />}</section>
            <main className="container">
                <Outlet />
                <ScrollToTop />
            </main>
        </>
    );
};

export default Layout;
