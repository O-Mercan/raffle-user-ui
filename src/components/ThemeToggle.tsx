import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/themeToggle.scss";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button
        className="btn btn-light btn-icon rounded-circle d-flex align-items-center"
        type="button"
        aria-expanded="false"
        data-bs-toggle="dropdown"
        aria-label="Toggle theme"
      >
        <i className={`bi theme-icon ${theme === "dark" ? "bi-moon-stars-fill" : "bi-sun-fill"}`}></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow">
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              theme === "light" ? "active" : ""
            }`}
            onClick={() => setTheme("light")}
          >
            <i className="bi bi-sun-fill"></i>
            <span className="ms-2">Light</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${
              theme === "dark" ? "active" : ""
            }`}
            onClick={() => setTheme("dark")}
          >
            <i className="bi bi-moon-stars-fill"></i>
            <span className="ms-2">Dark</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeToggle;
