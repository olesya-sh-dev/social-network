import React from "react";
import s from "./Dialogs.module.css";

import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { DialogsPropsType } from "../redux/store";

import { AddNewMessage } from "../AddNewMessage";

export const Dialogs = ({
  dialogs,
  messages,
  dispatch,
  newMessageBody,
}: DialogsPropsType & {
  dispatch: (action: any) => void;
  newMessageBody: string;
}) => {
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
        <AddNewMessage
          className={s.newMessage}
          dispatch={dispatch}
          newMessageBody={newMessageBody}
        />
      </div>
    </div>
  );
};
