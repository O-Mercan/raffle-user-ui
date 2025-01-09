import React from "react";
import ThemeToggle from "./ThemeToggle";
import "../styles/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer
      className="container-fluid py-2 border-top position-fixed bottom-0 bg-white"
      style={{ width: "100%" }}
    >
      <div className="row align-items-center">
        <div className="col-9">
          <div className="small">
            <span className="m-1">Copyright © 2025</span>
            <span className="text-primary m-1">
              <a href="/" className="footer-link">
                Feed Protocol
              </a>
            </span>
          </div>
        </div>
        <div className="col-3">
          <div className="text-md-end d-flex align-items-center justify-content-end">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
