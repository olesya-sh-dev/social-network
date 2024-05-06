import { Dispatch } from "redux";
import { AppStateType } from "./redux/redux-store";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "./redux/profile-reducer";
import { AddNewPost } from "./AddNewPost";
import { connect } from "react-redux";

type MapStatePropsType = {
  newPostText: string;
};
type MapDispatchPropsType = {
  updateNewPostText: (text: string) => void;
  addPost: (newPostText: string) => void;
};
export type AddNewPostMapPropsType = MapStatePropsType & MapDispatchPropsType;
export type AddNewPostType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: (newPostText: string) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

export const AddNewPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewPost);
