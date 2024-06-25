import { Dispatch } from "redux";
import { v1 } from "uuid";
import { profileAPI, usersAPI } from "../../api/api";
import {
  ContactType,
  PhotoType,
  UserProfileType,
} from "../Profile/ProfileContainer";

// const ADD_POST = "ADD-POST";
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type PostPropsType = {
  id: string;
  message: string;
  likesCount: number;
};

type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type DeletePostActionType = ReturnType<typeof deletePostActionCreator>;
//type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>;
type SetUserProfileActionType = ReturnType<typeof setUserProfile>;
type SetStatusActionType = ReturnType<typeof setStatus>;

export type ActionsProfileType =
  | AddPostActionType
  //| UpdateNewPostTextActionType
  | DeletePostActionType
  | SetUserProfileActionType
  | SetStatusActionType;

let initialState = {
  posts: [
    { id: "1", message: "Hi, how are you", likesCount: 15 },
    { id: "2", message: "It's my first post", likesCount: 20 },
  ] as Array<PostPropsType>,
  //newPostText: "type here...",
  //TODO null протипизировать
  profile: null as UserProfileType | null,
  status: "",
};
export type ProfilePropsType = typeof initialState;
export const profileReducer = (
  state: ProfilePropsType = initialState,
  action: ActionsProfileType
): ProfilePropsType => {
  switch (action.type) {
    case "ADD-POST":
      let newPost: PostPropsType = {
        id: v1(),
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        //newPostText: "type here...",
      };
    // case "UPDATE-NEW-POST-TEXT":
    //   console.log("textarea");
    //   return {
    //     ...state,
    //     newPostText: action.text,
    //   };
    case "DELETE-POST":
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    case "SET-STATUS":
      return {
        ...state,
        status: action.status,
      };
    case "SET-USER-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText: any) => {
  return {
    type: "ADD-POST",
    newPostText,
  } as const;
};
// export const updateNewPostTextActionCreator = (text: string) => {
//   return {
//     type: "UPDATE-NEW-POST-TEXT",
//     text,
//   } as const
// };
export const setUserProfile = (profile: UserProfileType) => {
  return {
    type: "SET-USER-PROFILE",
    profile,
  } as const;
};

export const setStatus = (status: string) => {
  return {
    type: "SET-STATUS",
    status,
  } as const;
};
export const deletePostActionCreator = (postId: string) => {
  return {
    type: "DELETE-POST",
    postId,
  } as const;
};
export const getUserProfileThunkCreator =
  (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(Number(userId));
    dispatch(setUserProfile(response.data));
  };
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
  let response = await profileAPI.getStatus(Number(userId));
  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
