//import { SidebarPropsType } from "../redux/store";
import { FriendsMapPropsType } from "./FriendsContainer";
import s from "./Navbar.module.css";
export const Friends = (props:FriendsMapPropsType) => {
  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div className={s.friendsList}>
        {props.friends.map((friend) => (
          <div key={friend.id}>
            <li>
              <img src={friend.img} />
              {friend.name}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};
