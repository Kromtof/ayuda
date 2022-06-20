import { Link } from "react-router-dom";
import React from "react";
import classes from "./components/layout/MainNavigation.module.css";

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Aprendiendo React </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Tabla</Link>
          </li>

          <li>
            <Link to="/alta">Alta</Link>
          </li>
          <li>
            <Link to="/carrito">Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
