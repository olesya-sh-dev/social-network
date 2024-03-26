import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <NavLink
        to={"/profile"}
        className={({ isActive }) => (isActive ? s.active : s.item)}
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.item)}
        to={"/dialogs"}
      >
        Messages
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.item)}
        to={"/news"}
      >
        News
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.item)}
        to={"/music"}
      >
        Music
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.active : s.item)}
        to={"/settings"}
      >
        Settings
      </NavLink>
    </nav>
  );
};
