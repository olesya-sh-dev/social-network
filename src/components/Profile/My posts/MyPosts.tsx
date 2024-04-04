import { Post, PropsType } from "./Post/Post";
import s from "./MyPosts.module.css";

type MyPostsPropsType = {
  postData: PropsType[];
};
export const MyPosts = ({ postData }: MyPostsPropsType) => {
  // let postData = [
  //   { id: 1, message: "Hi, how are you", likesCount: 15 },
  //   { id: 2, message: "It's my first post", likesCount: 20 },
  // ];
  let postsElements = postData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      My posts
      <div className={s.newPost}>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
