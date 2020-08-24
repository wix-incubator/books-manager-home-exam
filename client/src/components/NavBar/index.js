import React from "react";
import { Link } from "react-router-dom";
import * as style from "./NavBar.module.scss";
export const NavBar = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.linksContainer}>
        <li>
          <Link className={style.link} to="/search">
            Search Books
          </Link>
        </li>
        <li>
          <Link className={style.link} to="/collections">
            Collections
          </Link>
        </li>
      </ul>
    </nav>
  );
};
