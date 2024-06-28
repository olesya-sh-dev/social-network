import { PostPropsType } from "../../../redux/profile-reducer";
import s from "./Post.module.css";

export const Post = ({ id, message, likesCount }: PostPropsType) => {
  return (
    <div className={s.item} key={id}>
      <img src="https://img.freepik.com/free-psd/3d-illustration-of-human-avatar-or-profile_23-2150671126.jpg?w=826&t=st=1710060640~exp=1710061240~hmac=fa56f439f19eeeda890180f1251e1ddf4a6dfbc9ce457fdae0df22339311cafe" />
      {message}
      <div>
        <span>like {likesCount}</span>
      </div>
    </div>
  );
};