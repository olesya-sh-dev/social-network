import { Users } from "./Users";
import { connect } from "react-redux";
import {
  UserType,
  follow,
  unfollow,
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../redux/users-reducer";
import { AppStateType } from "../redux/redux-store";

import React from "react";
import { Preloader } from "../common/Preloader";

class UsersContainer extends React.Component<UsersMapPropsType> {
  // если кроме super в конструкторе ничего нет, то можно не писать, он идет по умолчанию
  // constructor(props: UsersMapPropsType) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    //this.props.setCurrentPage(pageNumber);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          followThunkCreator={this.props.followThunkCreator}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
        />
      </>
    );
  }
}

type MapStatePropsType = {
  users: UserType[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
};
type MapDispatchPropsType = {
  setCurrentPage: (currentPage: number) => void;
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void;
  getUsersThunkCreator: (currentPage: number, pageSize: number) => void;
  followThunkCreator: (userId: number) => void;
  unfollowThunkCreator: (userId: number) => void;
};
export type UsersMapPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  toggleIsFollowingProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
})(UsersContainer);
