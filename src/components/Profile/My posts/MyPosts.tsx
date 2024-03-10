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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
