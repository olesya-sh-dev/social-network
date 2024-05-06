import React, { ChangeEvent, useRef, useState } from "react";
import {
  ActionsProfileType,
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../components/redux/profile-reducer";
import { AddNewPostMapPropsType } from "./AddNewPostContainer";

// type AddNewItemPropsType = {
//   className?: string;
//   newPostText: string;
//   addPost: (newPostText: string) => void;
//   updateNewPostText: (text: string) => void;
// };
export const AddNewPost = (props:AddNewPostMapPropsType & { className?: string }) => {

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
  props.updateNewPostText(e.currentTarget.value)
  };

  const addItemHandler = () => {
   props.addPost(props.newPostText)
  };

  return (
    <div className={props.className}>
      <textarea value={props.newPostText} onChange={onChangeHandler}></textarea>
      <button onClick={addItemHandler}>ADD</button>
    </div>
  );
};
