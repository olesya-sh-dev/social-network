import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { DialogMapPropsType } from "./DialogsContainer";
import { AddNewMessage } from "../AddNewMessage";
import { Navigate} from "react-router-dom";


export const Dialogs = (props:DialogMapPropsType) => {
  let dialogsElements = props.dialogs.map((el, index) => (
    <DialogItem key={index} name={el.name} id={el.id} img={el.img} />
  ));
  let messagesElements = props.messages.map((el, index) => (
    <Message key={index} message={el.message} id={el.id} />
  ));
 
  //if (!props.isAuth) return <Navigate to="/login" />
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
          {/* <AddNewMessageContainer className="s.newMessage" /> */}
      <AddNewMessage className={s.newMessage} addNewMessage={props.addNewMessage} updateNewMessageText={props.updateNewMessageText} newMessageBody={props.newMessageBody}/>
      </div>
    </div>
  );
};
