import { Post } from "./Post/Post";
import s from "./../../Profile/Profile.module.css";
import { AddNewPost } from "../../AddNewPost";
import { MyPostsMapPropsType } from "./MyPostsContainer";

export const MyPosts = (props: MyPostsMapPropsType) => {
  console.log(props);
  let postsElements = props.posts.map((p, index) => (
    <Post key={index} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      My posts
      <AddNewPost
        className={s.newPostForm}
        newPostText={props.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
