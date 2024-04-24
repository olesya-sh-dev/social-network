import { v1 } from "uuid";
import { PostPropsType, ProfilePropsType } from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: "1", message: "Hi, how are you", likesCount: 15 },
    { id: "2", message: "It's my first post", likesCount: 20 },
  ],
  newPostText: "+++",
};
export const profileReducer = (
  state: ProfilePropsType = initialState,
  action: any
) => {
  switch (action.type) {
    case ADD_POST:
      console.log("add");
      let newPost: PostPropsType = {
        id: v1(),
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      console.log("textarea");
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText: string) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};
// type addPostActionType = ReturnType<typeof addPostActionCreator>;
export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text,
  };
};
