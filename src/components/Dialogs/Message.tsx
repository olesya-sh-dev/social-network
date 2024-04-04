import s from "./Dialogs.module.css";

export type MessagePropsType = {
  id: string;
  message: string;
};
export const Message = ({ id, message }: MessagePropsType) => {
  return (
    <li className={s.messageItem} key={id}>
      {message}
    </li>
  );
};
