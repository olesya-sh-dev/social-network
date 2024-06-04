import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import { UserType } from "../redux/users-reducer";
import s from "./Users.module.css";
import axios from "axios";

export const Users = (props: {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  users: UserType[];
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  onPageChanged: (pageNumber: number) => void;
}) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <>
      <div className={s.pages}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p ? s.selectedPage : ""}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
              key={p}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u, index) => (
        <div className={s.userBlock} key={index}>
          <div className={s.colomnInfo}>
            <NavLink to={"/profile/" + u.id}>
              <img
                className={s.userImg}
                src={
                  u.photos.small
                    ? u.photos.small
                    : "https://img.freepik.com/free-psd/3d-render-cat-emoji_23-2150311907.jpg?w=826&t=st=1716839538~exp=1716840138~hmac=9613992c138d69655f2378a3d65428a9cc6141be5eccdb37d61a5cd1f6cb4b54"
                }
                alt="img"
              />
            </NavLink>

            {u.followed ? (
              <Button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,

                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "1526cfeb-08ab-42c4-8d63-63741f5841f1",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                }}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "1526cfeb-08ab-42c4-8d63-63741f5841f1",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                }}
              >
                Follow
              </Button>
            )}
          </div>

          <div className={s.userInfo}>
            <div className={s.colomnInfo}>
              <div>{u.name}</div>
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
};
