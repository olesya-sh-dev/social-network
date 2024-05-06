import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { AddNewMessageContainer } from "../AddNewMessageContainer";
import { DialogMapPropsType } from "./DialogsContainer";


export const Dialogs = ({ dialogs, messages }:DialogMapPropsType)=> {
  let dialogsElements = dialogs.map((el, index) => (
    <DialogItem key={index} name={el.name} id={el.id} img={el.img} />
  ));
  let messagesElements = messages.map((el, index) => (
    <Message key={index} message={el.message} id={el.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
          <AddNewMessageContainer className="s.newMessage" />
      </div>
    </div>
  );
};
