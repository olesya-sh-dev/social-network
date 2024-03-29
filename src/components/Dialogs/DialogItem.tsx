import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogItemPropsType = {
  name: string;
  id: string;
};
export const DialogItem = ({ name, id }: DialogItemPropsType) => {
  return (
    <NavLink
      to={`/dialogs/${id}`}
      className={({ isActive }) => (isActive ? s.active : s.item)}
    >
      {name}
    </NavLink>
  );
};
