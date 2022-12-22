import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style/navbar.css";

const NavBar = () => {
    const [background, setBackground] = useState("transparent");

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY >= 150) {
            setBackground("dark");
        } else {
            setBackground("transparent");
        }
    };

    return (
        <Navbar bg={background} variant="dark" expand="lg" onToggle={() => setBackground("dark")}>
            <Container>
                <Link to="/home" className="navbar-brand logo">
                    MoviesApp
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/my-list" className="nav-link">
                            Mi Lista
                        </Link>
                        <Link to="/movies" className="nav-link">
                            Peliculas
                        </Link>
                        <Link to="/tv-shows" className="nav-link">
                            Series
                        </Link>
                        <Link to="/genres" className="nav-link">
                            Generos
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
