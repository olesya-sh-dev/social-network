
import { v1 } from "uuid";
import { profileAPI, usersAPI } from "../../api/api";
import {
  PhotoType,
  UserProfileType,
} from "../Profile/ProfileContainer";
import { AnyAction, Dispatch } from "redux";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";
import { stopSubmit } from "redux-form";

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
type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>;

export type ActionsProfileType =
  | AddPostActionType
  | DeletePostActionType
  | SetUserProfileActionType
  | SetStatusActionType
  | SavePhotoSuccessActionType
  

let initialState = {
  posts: [
    { id: "1", message: "Hi, how are you", likesCount: 15 },
    { id: "2", message: "It's my first post", likesCount: 20 },
  ] as Array<PostPropsType>,
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
     
      };
  
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
    case "SAVE-PHOTO":
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as UserProfileType,
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
export const savePhotoSuccess = (photos: PhotoType) => {
  return {
    type: "SAVE-PHOTO",
    photos,
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

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: UserProfileType): ThunkAction<void, AppStateType, unknown, AnyAction> => 
  async (dispatch, getState) => {
    const userId = getState().auth.userId;

    if (userId !== null) {
      const response = await profileAPI.saveProfile(profile);
      if (response.data.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId));
      } else {
        const errorMessage = response.data.messages[0];
        alert(`Error: ${errorMessage}`);
    
        dispatch(stopSubmit("edit-profile", {_error: errorMessage}));
        return Promise.reject(errorMessage);
      }
    }
  };


