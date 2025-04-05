import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import TimeAttackPage from "./components/TimeAttackPage";
// import "../src/index.css"

function Menu() {
  return (
    <nav className="menu">
      <Link className="menu__item" to="/">
        Главная
      </Link>
      <Link className="menu__item" to="/drift">
        Дрифт-такси
      </Link>
      <Link className="menu__item" to="/timeattack">
        Time Attack
      </Link>
      <Link className="menu__item" to="/forza">
        Forza Karting
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}