import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "./footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="item">
          <h1>©Ryhmä8</h1>
        </div>
        <div className="item">
          <a href="https://www.instagram.com/kolmastila_vjp/">
            <FontAwesomeIcon className="footer-icon" icon={faInstagram} />{" "}
          </a>
        </div>
        <div className="item">
          <a href="https://youtu.be/Nt69l65sgwM">
            <FontAwesomeIcon className="footer-icon" icon={faYoutube} />{" "}
          </a>
        </div>
        <div className="item-2">
          <a href="https://nuorisoala.fi/">
            <img src="./images/allianssilogo.svg" alt="allianssilogo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
