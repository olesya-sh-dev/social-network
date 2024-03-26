import s from "./Dialogs.module.css";

type MessagePropsType = {
  text: string;
};
export const Message = ({ text }: MessagePropsType) => {
  return <li className={s.messageItem}>{text}</li>;
};
