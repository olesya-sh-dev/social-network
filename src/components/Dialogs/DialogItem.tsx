import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";


export type DialogItemPropsType = {
  name: string;
  id: string;
  img: string;
};
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
