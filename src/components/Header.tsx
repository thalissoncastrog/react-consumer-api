import { NavLink } from "react-router-dom";

import logo from "../assets/pokebolalogo.png";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to={"/"} title="Página Inicial">
        <img src={logo} alt="logo do pokemon" />
      </NavLink>
    </header>
  );
}
