import React, { ChangeEvent, useRef, useState } from "react";
import { addPostActionCreator } from "./redux/state";

type AddNewItemPropsType = {
  className?: string;
  // addPost?: (newPostText: string) => void;
  // updateNewPostText?: (text: string) => void;
  dispatch: (action: any) => void;
  newPostText: string;
};
export const AddNewPost = (props: AddNewItemPropsType) => {
  //let newItem = useRef<HTMLTextAreaElement>(null);
  const [title, setTitle] = useState<string>(props.newPostText);
  // const addItemHandler = () => {
  //   if (newItem.current !== null) {
  //     props.updateNewPostText!(newItem.current.value);
  //     props.addPost!(newItem.current.value);
  //     newItem.current.value = "";
  //   }
  // };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.currentTarget.value);
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: e.currentTarget.value }); //props.updateNewPostText!(e.currentTarget.value);
  };

  const addItemHandler = () => {
    props.dispatch(addPostActionCreator(title)); //props.addPost!(title);
    setTitle("");
  };


  return (
    <div className={props.className}>
      <textarea value={title} onChange={onChangeHandler}></textarea>
      <button onClick={addItemHandler}>ADD</button> 
    
    </div>
  );
};
