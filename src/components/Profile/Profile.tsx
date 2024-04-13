import React, { useEffect } from "react";
import { MyPosts } from "./My posts/MyPosts";
import { Person } from "./Person/Person";

import { ProfilePropsType } from "../redux/state";

export const Profile = ({
    postData,
  addPost,
  updateNewPostText,
  newPostText
}: ProfilePropsType & { addPost: (newPostText: string) => void , updateNewPostText: (text: string) => void}) => {
  
  useEffect (() => {
    console.log("render");
  }, [postData]);
  return (
    <div>
      <img src="https://plus.unsplash.com/premium_photo-1709493205281-cf7a93041a16?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Person />
      <MyPosts postData={postData} addPost={addPost} updateNewPostText={updateNewPostText} newPostText={newPostText}/>
    </div>
  );
};
