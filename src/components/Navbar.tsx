import React from "react";
import "../styles/navbar.scss";
import "../images/feed-logo.svg"

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg w-100 bg-white">
        <div className="container-fluid px-3">
          {/* Logo */}
          <a className="navbar-brand" href="https://feedprotocol.xyz/">
            <img
              alt="Feed Protocol Logo"
              loading="lazy"
              width="100"
              height="50"
              decoding="async"
              src="src/images/feed-logo.svg"
              style={{ color: "transparent" }}
            />
          </a>

          {/* Docs Button */}
          <ul className="navbar-nav ms-auto align-items-lg-center flex-row">
            <li className="nav-item">
              <a
                target="_blank"
                className="btn btn-outline-primary"
                rel="noreferrer"
                href="https://feed-protocol.gitbook.io/docs"
              >
                Docs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
