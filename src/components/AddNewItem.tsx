import React, { ChangeEvent, useRef, useState } from "react";

type AddNewItemPropsType = {
  className?: string;
  addPost?: (newPostText: string) => void;
  updateNewPostText?: (text: string) => void;
  newPostText: string;
};
export const AddNewItem = (props: AddNewItemPropsType) => {
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
         props.updateNewPostText!(e.currentTarget.value);
    }

const addItemHandler = () => {
  props.addPost!(title);
  setTitle("");
};

  return (
    <div className={props.className}>
      <textarea
        
        value={title}
        onChange={onChangeHandler}
      ></textarea>
      <button onClick={addItemHandler}>ADD</button>
    </div>
  );
};
