import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
  isAuth: boolean;
  login: string;
  logoutThunkCreator: () => void;
};
export const Header = (props: HeaderPropsType) => {
  return (
    <header className={s.header}>
      <img
        src="https://cdn4.vectorstock.com/i/1000x1000/46/83/samurai-logo-vector-31294683.jpg"
        alt="logo"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} 
            <button onClick={props.logoutThunkCreator}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
