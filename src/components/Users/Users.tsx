import { Button } from "../Button";
import { UsersMapPropsType } from "./UsersContainer";
import s from "./Users.module.css"
import axios from "axios";

export const Users = (props: UsersMapPropsType) => {
  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
      props.setUsers(response.data.items);
    });
  

  }
  return (
    <>
      {props.users.map((u, index) => (
        <div className={s.userBlock} key={index}>
          <div className={s.colomnInfo}>
            <img
              className={s.userImg}
              src={u.photos.small ? u.photos.small : "https://img.freepik.com/free-psd/3d-render-cat-emoji_23-2150311907.jpg?w=826&t=st=1716839538~exp=1716840138~hmac=9613992c138d69655f2378a3d65428a9cc6141be5eccdb37d61a5cd1f6cb4b54"}
              alt="img"
           
            />
            {u.followed ? (
              <Button 
                onClick={() => {
                  props.unfollow(u.id);
                }}
                
              >
                Unfollow
              </Button>
            ) : (
              <Button
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </Button>
            )}
          </div>

          <div className={s.userInfo}>
            <div className={s.colomnInfo}>
              <div >{u.name}</div>
              <span>{u.status}</span>
            </div>
            <div className={s.colomnInfo}>
              <span>{"u.location.city"}</span>
              <span>{"u.location.country"}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

