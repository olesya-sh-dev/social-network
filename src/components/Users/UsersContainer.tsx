import { Users } from "./Users";
import { connect } from "react-redux";
import axios from "axios";
import {
  UserType,
  setCurrentPage,
  follow,
  toggleIsFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
} from "../redux/users-reducer";
import { AppStateType } from "../redux/redux-store";

import React from "react";
import { Preloader } from "../common/Preloader";
import { usersAPI } from "../../api/api";


class UsersContainer extends React.Component<UsersMapPropsType> {
  // если кроме super в конструкторе ничего нет, то можно не писать, он идет по умолчанию
  // constructor(props: UsersMapPropsType) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {

      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
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
};
type MapDispatchPropsType = {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
  setUsers: (users: UserType[]) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};
export type UsersMapPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(currentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     };
// };
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
