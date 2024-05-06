
import { MessagePropsType } from "../redux/dialogs-reducer";
import s from "./Dialogs.module.css";

export const Message = ({ id, message }: MessagePropsType) => {
  return (
    <li className={s.messageItem} key={id}>
      {message}
    </li>
  );
};
