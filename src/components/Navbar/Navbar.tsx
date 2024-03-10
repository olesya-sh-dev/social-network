import React from "react";
import s from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul>
        <li className={s.item}>Profile</li>
        <li className={s.item}>Messages</li>
        <li className={s.item}>News</li>
        <li className={s.item}>Music</li>
        <li className={s.item}>Settings</li>
      </ul>
    </nav>
  );
};
