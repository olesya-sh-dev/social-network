import { connect } from "react-redux";

import { MyPosts } from "./MyPosts";
import { AppStateType } from "../../redux/redux-store";
import { PostPropsType } from "../../redux/profile-reducer";

export type MyPostsMapPropsType = MapStatePostsPropsType
type MapStatePostsPropsType = {
posts: PostPropsType[]
}
let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,

)(MyPosts);
