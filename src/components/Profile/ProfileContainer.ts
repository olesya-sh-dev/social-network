import { connect } from "react-redux";
import { Profile } from "./Profile";
import { AppStateType } from "../redux/redux-store";
import {
  PostPropsType,
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../redux/profile-reducer";
import { Dispatch } from "redux";

type MapStatePropsType = {
  posts: Array<PostPropsType>;
  newPostText: string;
};
type MapDispatchPropsType = {
  addPost: (newPostText: string) => void;
  updateNewPostText: (text: string) => void;
};
export type ProfileMapPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  };
};

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
