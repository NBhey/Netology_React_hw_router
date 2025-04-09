import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import TimeAttackPage from "./components/TimeAttackPage";
// .menu__item-active
function Menu() {
  return (
    <nav className="menu">
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/drift"
      >
        Дрифт-такси
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/timeattack"
      >
        Time Attack
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `menu__item ${isActive ? "menu__item-active" : ""}`
        }
        to="/forza"
      >
        Forza Karting
      </NavLink>
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
