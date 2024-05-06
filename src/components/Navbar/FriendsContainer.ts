import { connect } from "react-redux";
import { AppStateType } from "../redux/redux-store";
import { Friends } from "./Friends";
import { FriendType } from "../redux/sidebar-reducer";


type MapStatePropsType = {
    friends: FriendType[]
}
export type FriendsMapPropsType = MapStatePropsType
const MapStateToProps = (state: AppStateType) => {
    return {
        friends: state.sidebar.friends,
    };
};
export const FriendsContainer = connect(MapStateToProps)(Friends)