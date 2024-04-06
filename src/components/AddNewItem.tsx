import React, { useRef } from "react";

type AddNewItemPropsType = {
  className?: string;
  addPost?: (newPostText: string) => void;
};
export const AddNewItem = (
  props: AddNewItemPropsType & { addPost: (newPostText: string) => void }
) => {
  let newItem = useRef<HTMLTextAreaElement>(null);

  const addItemHandler = () => {
    debugger;
    if (newItem.current !== null) {
      props.addPost!(newItem.current.value);
      //newItem.current.value = "";
      alert(newItem.current.value);
    }
  };
  return (
    <div className={props.className}>
      <textarea ref={newItem}></textarea>
      <button onClick={addItemHandler}>ADD</button>
    </div>
  );
};
