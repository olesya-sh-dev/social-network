import { connect } from "react-redux";

import { UserType, currentPageAC, followAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../redux/users-reducer";
import { Dispatch } from "redux";
import { AppStateType } from "../redux/redux-store";

import UsersAPIComponent from "./UsersAPIComponent";


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
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)