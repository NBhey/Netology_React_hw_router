import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import TimeAttackPage from "./components/TimeAttackPage";

function Menu() {
  return (
    <nav className="menu">
      <a className="menu__item" href="/">
        Главная
      </a>
      <a className="menu__item" href="/drift">
        Дрифт-такси
      </a>
      <a className="menu__item" href="/timeattack">
        Time Attack
      </a>
      <a className="menu__item" href="/forza">
        Forza Karting
      </a>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
