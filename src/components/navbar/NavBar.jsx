import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import SearchBar from "../searchBar/SearchBar";
import UserIcon from "../userIcon/UserIcon";
import { useTranslation } from "react-i18next";
import LanguageIcon from "../languageIcon/LanguageIcon";

const NavBar = () => {
  const [background, setBackground] = useState("transparent");
  const [expanded, setExpanded] = useState(false);
  const [t, i18n] = useTranslation("global")

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (!expanded) {
      if (window.scrollY >= 150) {
        setBackground("dark");
      } else {
        setBackground("transparent");
      }
    }
  };

  const handleToggle = (isOpen) => {
    setExpanded(isOpen);
    if (isOpen) {
      setBackground("dark");
    } else {
      setBackground("transparent");
    }
  };

  return (
    <Navbar bg={background} variant="dark" expand="lg" expanded={expanded} onToggle={handleToggle} className="py-3">
      <Container>
        <Link to="/home" className="navbar-brand logo p-0" onClick={() => setExpanded(false)}>
          MoviesApp
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-center">
            <Link to="/my-list" className="nav-link" onClick={() => setExpanded(false)}>
              {t("navbar.my-list")}
            </Link>
            <Link to="/movies" className="nav-link" onClick={() => setExpanded(false)}>
              {t("navbar.movies")}
            </Link>
            <Link to="/tv-shows" className="nav-link" onClick={() => setExpanded(false)}>
              {t("navbar.shows")}
            </Link>
            <Link to="/genres" className="nav-link" onClick={() => setExpanded(false)}>
              {t("navbar.genres")}
            </Link>
          </Nav>
          <div className="d-flex align-items-center justify-content-center flex-row">
            <SearchBar />
            <UserIcon />
            <LanguageIcon />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
