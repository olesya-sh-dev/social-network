import React from "react";
import { Post } from "../Post/Post";
import s from "./MyPosts.module.css";

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div className={s.newPost}>
        <textarea></textarea>
        <button>add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you" likesCount={15} />
        <Post message="It's my first post" likesCount={20} />
      </div>
    </div>
  );
};
