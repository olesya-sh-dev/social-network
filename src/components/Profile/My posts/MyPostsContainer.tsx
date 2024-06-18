import { connect } from "react-redux";

import { MyPosts } from "./MyPosts";
import { AppStateType } from "../../redux/redux-store";
import {
  PostPropsType,
  addPostActionCreator,
 
} from "../../redux/profile-reducer";
import { Dispatch } from "redux";

export type MyPostsMapPropsType = MapStatePostsPropsType&MapDispatchPropsType
type MapStatePostsPropsType = {
  posts: PostPropsType[];
  //newPostText: string
};
type MapDispatchPropsType = {
  addPost: (newPostText: any) => void;
  //updateNewPostText: (text: string) => void;
};
let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    //newPostText: state.profilePage.newPostText,
  };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPost: (newPostText: any) => {
      dispatch(addPostActionCreator(newPostText));
    },
    // updateNewPostText: (text: string) => {
    //   dispatch(updateNewPostTextActionCreator(text));
    // },
  };
};
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
