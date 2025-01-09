import React from "react";
import "../styles/sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h1>feed.</h1>
      <nav>
        <ul>
          <li className="active">
            <span>📌</span> Dashboard
          </li>
          <li>
            <span>📦</span> Credit Packages
          </li>
          <li>
            <span>✍️</span> Signer Management
          </li>
          <li>
            <span>🎲</span> Try RNG!
          </li>
          <li>
            <span>🎁</span> Raffle
          </li>
          <li>
            <span>🕹️</span> JanKenGo Demo
          </li>
        </ul>
      </nav>
      <button className="disconnect">Disconnect</button>
      <div className="solana-selector">⚡ Solana ▼</div>
    </aside>
  );
};

export default Sidebar;
