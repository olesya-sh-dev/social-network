import { SidebarPropsType } from "../redux/store";
import s from "./Navbar.module.css";
export const Friends = ({ friends }: SidebarPropsType) => {
  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <div className={s.friendsList}>
        {friends.map((friend) => (
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
