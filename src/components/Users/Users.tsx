import { UserType } from "../redux/users-reducer";
import { Paginator } from "../common/Paginator/Paginator";
import { User } from "./User";

export const Users = (props: {
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
    <>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        portionSize={25}
      />

      {props.users.map((u, index) => <User
        user={u}
        index={index}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        users={props.users}
        onPageChanged={props.onPageChanged}
        followingInProgress={props.followingInProgress}
        followThunkCreator={props.followThunkCreator}
        unfollowThunkCreator={props.unfollowThunkCreator}
      />)}

    </>
  );
}