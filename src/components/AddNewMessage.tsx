import { ChangeEvent, useState } from "react";
import { ActionsDialogsType, addMessageActionCreator, updateNewMessageTextActionCreator } from "./redux/dialogs-reducer";


type AddNewMessagePropsType = {
  className?: string;
  dispatch: (action: ActionsDialogsType) => void;
  // addNewMessage: (text: string) => void;
  // upDateNewMessageText: (text: string) => void;
  newMessageBody: string;
};
export const AddNewMessage = (props: AddNewMessagePropsType) => {
  //const [message, setMessage] = useState<string>(props.newMessageBody);
    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //setMessage(e.currentTarget.value);
    props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
    //props.upDateNewMessageText!(e.currentTarget.value);

  };

  const addMessageHandler = () => {
    props.dispatch(addMessageActionCreator(props.newMessageBody));
    //props.addNewMessage!(message);
    //setMessage("");
  };
  return (
    <div className={props.className} style={{alignSelf: "flex-start", backgroundColor: "transparent"}}>
      <textarea value={props.newMessageBody} onChange={onChangeMessageHandler}></textarea>
      <button onClick={addMessageHandler}>send</button>
    </div>
  );
};
