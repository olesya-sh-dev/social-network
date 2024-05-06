import { ChangeEvent } from "react";
//import { AddNewMessageMapPropsType } from "./AddNewMessageContainer";

type AddNewMessagePropsType = {
  className: string;
   updateNewMessageText: (text: string) => void;
   addNewMessage: (newMessageBody: string) => void
  newMessageBody: string;
 };
export const AddNewMessage = (props: AddNewMessagePropsType) => {
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      props.updateNewMessageText(e.currentTarget.value);
    };
  const addMessageHandler = () => {
   props.addNewMessage(props.newMessageBody);    
  };
  return (
    <div className={props.className} style={{alignSelf: "flex-start", backgroundColor: "transparent"}}>
      <textarea value={props.newMessageBody} onChange={onChangeMessageHandler}></textarea>
      <button onClick={addMessageHandler}>send</button>
    </div>
  );
};
