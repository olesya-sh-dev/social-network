import { log } from "console";
import { ChangeEvent, useState } from "react";

type AddNewMessagePropsType = {
  className?: string;
  addNewMessage: (text: string) => void;
  upDateNewMessageText: (text: string) => void;
  newMessageBody: string;
};
export const AddNewMessage = (props: AddNewMessagePropsType) => {
  const [message, setMessage] = useState<string>(props.newMessageBody);
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
    props.upDateNewMessageText!(e.currentTarget.value);
  };

  const addMessageHandler = () => {
    props.addNewMessage!(message);
    setMessage("");
  };
  return (
    <div className={props.className} style={{alignSelf: "flex-start", backgroundColor: "transparent"}}>
      <textarea value={message} onChange={onChangeMessageHandler}></textarea>
      <button onClick={addMessageHandler}>send</button>
    </div>
  );
};
