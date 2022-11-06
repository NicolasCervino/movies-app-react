import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./style/navbar.css";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Link to="/home" className="navbar-brand logo">
                    MoviesApp
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/miLista" className="nav-link">
                            Mi Lista
                        </Link>
                        <Link to="/movies" className="nav-link">
                            Peliculas
                        </Link>
                        <Link to="/shows" className="nav-link">
                            Series
                        </Link>
                        <NavDropdown title="Generos" id="basic-nav-dropdown">
                            <Link to="/genre/action" className="dropdown-item">
                                Acción
                            </Link>
                            <Link to="/genre/science-fiction" className="dropdown-item">
                                Ciencia Ficción
                            </Link>
                            <Link to="/genre/drama" className="dropdown-item">
                                Drama
                            </Link>
                            <NavDropdown.Divider />
                            <Link to="/genres" className="dropdown-item">
                                Todos
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
