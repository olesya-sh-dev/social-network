import { Post } from "./Post/Post";
import s from "./MyPosts.module.css";
import { MyPostsPropsType } from "../../redux/state";
import { AddNewItem } from "../../AddNewItem";

export const MyPosts = ({
  postData,
  addPost,
  updateNewPostText,
  newPostText
}: MyPostsPropsType & { addPost: (newPostText: string) => void, updateNewPostText: (text: string) => void, newPostText: string }) => {
  let postsElements = postData.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  return (
    <div>
      My posts
      <AddNewItem className={s.newPost} addPost={addPost} updateNewPostText={updateNewPostText} newPostText={newPostText}/>
      {/* <div className={s.newPost}>
        <textarea></textarea>
        <button>add post</button>
      </div> */}
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};
