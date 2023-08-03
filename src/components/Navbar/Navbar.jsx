import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../Navbar/Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-content">
        <Link to="../">
          <img src="./assets/logo.svg" alt="logo"></img>
        </Link>
        <div className="nav-content__left">
          <div className="navbar-links">
            <Link to="/scoot-multipage-website/about" className="nav-links">
              About
            </Link>
            <Link to="/scoot-multipage-website/locations" className="nav-links">
              Location
            </Link>
            <Link to="/scoot-multipage-website/careers" className="nav-links">
              Careers
            </Link>
          </div>
          <button className="btn">Get ScootIn</button>
        </div>
      </div>
      {/* mobile menu */}
      <div className="hamburger-container">
        <div className="hamburger-icon">
          {nav ? (
            <img
              src="./assets/icons/close.svg"
              alt="close icon"
              onClick={() => setNav(!nav)}
            />
          ) : (
            <img
              src="./assets/icons/hamburger.svg"
              alt="hamburger icon"
              onClick={() => setNav(!nav)}
            />
          )}
        </div>

        <div className={nav ? "mobile-nav__open" : "mobile-nav"}>
          <div className="">
            <nav className="mobile-nav__content">
              <ul>
                <li>
                  <Link
                    to="/scoot-multipage-website/about"
                    className="mobile-nav__links"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/scoot-multipage-website/locations"
                    className="mobile-nav__links"
                  >
                    Location
                  </Link>
                </li>
                <li>
                  <Link
                    to="/scoot-multipage-website/careers"
                    className="mobile-nav__links"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
              <button className=" mobile-btn">Get ScootIn</button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
