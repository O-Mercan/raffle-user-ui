import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Dashboard />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
