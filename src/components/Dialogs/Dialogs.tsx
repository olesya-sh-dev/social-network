import React from "react";
import s from "./Dialogs.module.css";

import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { DialogsPropsType, addPost } from "../redux/state";
import { AddNewItem } from "../AddNewItem";

// type DialogsPropsType = {
//   dialogs: DialogItemPropsType[];
//   messages: MessagePropsType[];
// };
export const Dialogs = ({ dialogs, messages }: DialogsPropsType) => {
  let dialogsElements = dialogs.map((el) => (
    <DialogItem name={el.name} id={el.id} img={el.img} />
  ));
  let messagesElements = messages.map((el) => (
    <Message message={el.message} id={el.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <AddNewItem className={s.newMessage} addPost={addPost} />
      </div>
    </div>
  );
};
