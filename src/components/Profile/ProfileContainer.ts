import { connect } from "react-redux";
import { Profile } from "./Profile";
import { AppStateType } from "../redux/redux-store";
import { PostPropsType } from "../redux/profile-reducer";


type MapStatePropsType = {
    posts: Array<PostPropsType>
}
export type ProfileMapPropsType = MapStatePropsType
const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
    };
};

export const ProfileContainer = connect(mapStateToProps)(Profile)