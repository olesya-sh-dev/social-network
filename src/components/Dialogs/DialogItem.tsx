import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import { DialogItemPropsType } from "../redux/store";

export const DialogItem = ({ name, id, img }: DialogItemPropsType) => {
  return (
    <NavLink
      to={`/dialogs/${id}`}
      className={({ isActive }) => (isActive ? s.active : s.item)}
    >
      <img src={img} />
      {name}
    </NavLink>
  );
};
