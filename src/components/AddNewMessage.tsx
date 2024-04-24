import { log } from "console";
import { ChangeEvent, useState } from "react";
import { addMessageActionCreator, updateNewPostTextActionCreator } from "./redux/state";

type AddNewMessagePropsType = {
  className?: string;
  dispatch: (action: any) => void;
  // addNewMessage: (text: string) => void;
  // upDateNewMessageText: (text: string) => void;
  newMessageBody: string;
};
export const AddNewMessage = (props: AddNewMessagePropsType) => {
  const [message, setMessage] = useState<string>(props.newMessageBody);
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
    props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    //props.upDateNewMessageText!(e.currentTarget.value);

  };

  const addMessageHandler = () => {
    props.dispatch(addMessageActionCreator(message));
    //props.addNewMessage!(message);
    setMessage("");
  };
  return (
    <div className={props.className} style={{alignSelf: "flex-start", backgroundColor: "transparent"}}>
      <textarea value={message} onChange={onChangeMessageHandler}></textarea>
      <button onClick={addMessageHandler}>send</button>
    </div>
  );
};
