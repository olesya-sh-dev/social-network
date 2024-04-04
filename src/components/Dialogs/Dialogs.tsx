import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem, DialogItemPropsType } from "./DialogItem";
import { Message, MessagePropsType } from "./Message";

type DialogsPropsType = {
  dialogs: DialogItemPropsType[];
  messages: MessagePropsType[];
};
export const Dialogs = ({ dialogs, messages }: DialogsPropsType) => {
  // let dialogs = [
  //   { id: "1", name: "Dimych" },
  //   { id: "2", name: "Andrey" },
  //   { id: "3", name: "Sveta" },
  //   { id: "4", name: "Sasha" },
  //   { id: "5", name: "Viсtor" },
  //   { id: "6", name: "Valera" },
  // ];

  // let messages = [
  //   { id: "1", message: "Hi" },
  //   { id: "2", message: "How is your React?" },
  //   { id: "3", message: "Yo" },
  //   { id: "4", message: "Yo" },
  //   { id: "5", message: "Yo" },
  // ];

  let dialogsElements = dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));
  let messagesElements = messages.map((el) => (
    <Message message={el.message} id={el.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};
