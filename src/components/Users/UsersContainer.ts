import { connect } from "react-redux";
import { Users } from "./Users";
import { UserType, followAC, setUsersAC, unfollowAC } from "../redux/users-reducer";
import { Dispatch } from "redux";
import { AppStateType } from "../redux/redux-store";


type MapStatePropsType = {
    users: UserType[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: UserType[]) => void;
}
export type UsersMapPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
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
    };
};
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)