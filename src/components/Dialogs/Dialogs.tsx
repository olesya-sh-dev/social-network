import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Andrey" id="2" />
        <DialogItem name="Sveta" id="3" />
        <DialogItem name="Sasha" id="4" />
        <DialogItem name="Viktor" id="5" />
        <DialogItem name="Valera" id="6" />
      </div>
      <div className={s.messages}>
        <Message text="Hi" />
        <Message text="How is your React?" />
        <Message text="Yo" />
        <Message text="Yo" />
        <Message text="Yo" />
      </div>
    </div>
  );
};
