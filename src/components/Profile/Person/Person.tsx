import React from "react";
import s from "./Person.module.css";
export const Person = () => {
  return (
    <div className={s.info}>
      <img src="https://img.freepik.com/free-psd/3d-rendering-of-avatar_23-2150833536.jpg?w=826&t=st=1710062270~exp=1710062870~hmac=c3bd95eb957362835098e6bcc401b52c04ef9294130b6b9a241b0f686c24e2ef" />
      <div className={s.description}>
        <span>Olesya Shalay</span>
        <span>Date of birth: 15th april</span>
        <span>City: Minsk</span>
        <span>Education:BSEU</span>
      </div>
    </div>
  );
};
