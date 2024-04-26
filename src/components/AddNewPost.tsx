import React, { ChangeEvent, useRef, useState } from "react";
import {
  ActionsProfileType,
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../components/redux/profile-reducer";

type AddNewItemPropsType = {
  className?: string;
  newPostText: string;
  dispatch: (action: ActionsProfileType) => void;
};
export const AddNewPost = (props: AddNewItemPropsType) => {
  //let newItem = useRef<HTMLTextAreaElement>(null);
  //const [title, setTitle] = useState<string>(props.newPostText);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //setTitle(e.currentTarget.value);
    props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value)); //props.updateNewPostText!(e.currentTarget.value);
  };

  const addItemHandler = () => {
  props.dispatch(addPostActionCreator(props.newPostText)); //props.addPost!(title);
  //   setTitle("");
  };

  return (
    <div className={props.className}>
      <textarea value={props.newPostText} onChange={onChangeHandler}></textarea>
      <button onClick={addItemHandler}>ADD</button>
    </div>
  );
};
