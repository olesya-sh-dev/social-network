import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { Friends } from "./Friends";
import { SidebarPropsType } from "../redux/state";
export const Navbar = ({ friends }: SidebarPropsType) => {
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

      <div>
        <Friends friends={friends} />
      </div>
    </nav>
  );
};
