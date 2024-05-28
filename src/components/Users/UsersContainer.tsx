import { Users} from './Users';
import { connect } from "react-redux";
import axios from "axios";
import { UserType, currentPageAC, followAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../redux/users-reducer";
import { Dispatch } from "redux";
import { AppStateType } from "../redux/redux-store";

import React from 'react';

class UsersContainer extends React.Component<UsersMapPropsType> {
    // если кроме super в конструкторе ничего нет, то можно не писать, он идет по умолчанию
    // constructor(props: UsersMapPropsType) {
    //   super(props);
    // }
    componentDidMount() {
      console.log(this.props.currentPage);
      console.log(this.props.pageSize);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
       
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  
    onPageChanged = (pageNumber: number) => {
      this.props.setCurrentPage(pageNumber);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    };
    render() {
     
      return <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} users={this.props.users} currentPage={this.props.currentPage} onPageChanged={this.onPageChanged} follow={this.props.follow} unfollow={this.props.unfollow}/>
  
   
    }
  }

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void


}
export type UsersMapPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
       
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(currentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)