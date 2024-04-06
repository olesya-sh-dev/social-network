import React, { useRef } from "react";

type AddNewItemPropsType = {
  className?: string;
};
export const AddNewItem = (props: AddNewItemPropsType) => {
  let newItem = useRef<HTMLTextAreaElement>(null);

  const addItemHandler = () => {
    if (newItem.current !== null) {
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
