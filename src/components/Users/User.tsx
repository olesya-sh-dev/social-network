import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { UserType } from "../redux/users-reducer";
import s from "./Users.module.css";


export const User = (props: {
  user: UserType;
  index: number;
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: UserType[];
  onPageChanged: (pageNumber: number) => void;
  followingInProgress: Array<number>;
  followThunkCreator: (userId: number) => void;
  unfollowThunkCreator: (userId: number) => void;
}) => {
  return (
    <div className={s.userBlock} key={props.index}>
      <div className={s.colomnInfo}>
        <NavLink to={"/profile/" + props.user.id}>
          <img
            className={s.userImg}
            src={
              props.user.photos.small
                ? props.user.photos.small
                : "https://img.freepik.com/free-psd/3d-render-cat-emoji_23-2150311907.jpg?w=826&t=st=1716839538~exp=1716840138~hmac=9613992c138d69655f2378a3d65428a9cc6141be5eccdb37d61a5cd1f6cb4b54"
            }
            alt="img"
          />
        </NavLink>

        {props.user.followed ? (
          <Button
            disabled={props.followingInProgress.some(
              (id) => id === props.user.id
            )}
            onClick={() => {
              props.unfollowThunkCreator(props.user.id);
            }}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            disabled={props.followingInProgress.some(
              (id) => id === props.user.id
            )}
            onClick={() => {
              props.followThunkCreator(props.user.id);
            }}
          >
            Follow
          </Button>
        )}
      </div>

      <div className={s.userInfo}>
        <div className={s.colomnInfo}>
          <div>{props.user.name}</div>
          <span>{props.user.status}</span>
        </div>
        <div className={s.colomnInfo}>
          <span>{"u.location.city"}</span>
          <span>{"u.location.country"}</span>
        </div>
      </div>
    </div>
  );
};
