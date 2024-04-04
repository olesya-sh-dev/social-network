import React from "react";
import { Post } from "../Post/Post";
import s from "./MyPosts.module.css";

export const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
  ];
  let postsElements = postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
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
