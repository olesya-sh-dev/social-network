import React from "react";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://cdn4.vectorstock.com/i/1000x1000/46/83/samurai-logo-vector-31294683.jpg"
        alt="logo"
      />
    </header>
  );
};
