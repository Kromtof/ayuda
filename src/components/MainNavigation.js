import { Link } from "react-router-dom";

import classes from "./layout/MainNavigation.module.css";

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to="/">SUBITE MOROCHA</Link>
          </li>
          <li>
            <Link to="/new-meetup">A DONDE IRA ESTE BOTON</Link>
          </li>
          <li>
            <Link to="/favorites">TE CREES GRACIOSO</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
