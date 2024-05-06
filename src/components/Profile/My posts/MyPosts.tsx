import { Post } from "./Post/Post";
import s from "./MyPosts.module.css";
import { AddNewPostContainer } from "../../AddNewPostContainer";
import { MyPostsMapPropsType } from "./MyPostsContainer";

export const MyPosts = (props: MyPostsMapPropsType) => {
  let postsElements = props.posts.map((p, index) => (
    <Post key={index} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      My posts
      <AddNewPostContainer className={s.newPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
