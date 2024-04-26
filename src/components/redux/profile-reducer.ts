import { v1 } from "uuid";
import { PostPropsType, ProfilePropsType } from "./store";

// const ADD_POST = "ADD-POST";
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>;

export type ActionsProfileType = AddPostActionType
  | UpdateNewPostTextActionType

let initialState = {
  posts: [
    { id: "1", message: "Hi, how are you", likesCount: 15 },
    { id: "2", message: "It's my first post", likesCount: 20 },
  ],
  newPostText: "type here...",
};
export const profileReducer = (
  state: ProfilePropsType = initialState,
  action: ActionsProfileType
) => {
  switch (action.type) {
    case "ADD-POST":
      console.log("add");
      let newPost: PostPropsType = {
        id: v1(),
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "type here...",
      };
    case "UPDATE-NEW-POST-TEXT":
      console.log("textarea");
      return {
        ...state,
        newPostText: action.text,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText: string) => {
  return {
    type: "ADD-POST",
    newPostText,
  } as const  

} 
export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    text, 
  } as const  
};
