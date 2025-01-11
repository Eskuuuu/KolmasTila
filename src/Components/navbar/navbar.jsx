import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./navbar.css";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpening = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav id="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img
              src="./images/3tila_logo.svg"
              alt="logo"
              className="nav-logo"
            />
          </Link>

          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleMenuOpening}>
                Kampanjasivu
              </Link>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#info"
                className="nav-links"
                onClick={handleMenuOpening}
              >
                Info
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                to="/about#alku"
                className="nav-links"
                onClick={handleMenuOpening}
              >
                Meistä
              </HashLink>
            </li>
            <li className="nav-item2">
              <Link
                to="/interactive"
                className="nav-links"
                onClick={handleMenuOpening}
              >
                Etsi kolmansia tiloja
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleMenuOpening}>
            {menuOpen ? (
              <span className="icon">
                <FontAwesomeIcon icon={faTimes} />{" "}
              </span>
            ) : (
              <span className="icon">
                <FontAwesomeIcon icon={faBars} />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
