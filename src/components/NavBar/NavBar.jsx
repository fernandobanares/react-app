import React from "react";
import "./NavBar.css";
import Cartwidget from "../CartWidget/Cartwidget";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <li>Inicio</li>
        <li>Categoría B</li>
        <li>Categoría A</li>
        <li>Categoría C</li>
        <Cartwidget />
      </ul>
      
    </div>
  );
}

export default NavBar;