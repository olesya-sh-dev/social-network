
import { Dispatch } from "redux";
import { v1 } from "uuid";
import { profileAPI, usersAPI } from "../../api/api";
import { ContactType, PhotoType, UserProfileType } from "../Profile/ProfileContainer";


// const ADD_POST = "ADD-POST";
//const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export type PostPropsType = {
  id: string;
  message: string;
  likesCount: number;
};

type AddPostActionType = ReturnType<typeof addPostActionCreator>;
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>;
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
type SetStatusActionType = ReturnType<typeof setStatus>

export type ActionsProfileType = AddPostActionType
  | UpdateNewPostTextActionType
  | SetUserProfileActionType
  | SetStatusActionType

let initialState = {
  posts: [
    { id: "1", message: "Hi, how are you", likesCount: 15 },
    { id: "2", message: "It's my first post", likesCount: 20 },
  ] as Array<PostPropsType>,
  newPostText: "type here...",
  //TODO null протипизировать
  profile: null as UserProfileType | null,
  status:""
};
export type ProfilePropsType = typeof initialState
export const profileReducer = (
  state: ProfilePropsType = initialState,
  action: ActionsProfileType
): ProfilePropsType => {
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
      case "SET-STATUS":
        return {
          ...state,
          status: action.status
        }
      case "SET-USER-PROFILE":
        return {
          ...state,
          profile: action.profile
        }
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
export const setUserProfile = (profile: UserProfileType) => {
  return {
    type: "SET-USER-PROFILE",
    profile
  } as const
}

export const setStatus = (status: string) => {
  return {
    type: "SET-STATUS",
    status
  } as const
}
export const getUserProfileThunkCreator = (userId: number) => (dispatch:Dispatch)=>{
  usersAPI.getProfile(Number(userId)).then((response) => {
    dispatch(setUserProfile(response.data))
  });
}

export const getStatus = (userId: number) => (dispatch:Dispatch)=>{
  profileAPI.getStatus(Number(userId)).then((response)=>{
    dispatch(setStatus(response.data))
  })
}

export const updateStatus = (status:string) => (dispatch:Dispatch) =>{
  profileAPI.updateStatus(status).then((response)=>{
    if (response.data.resultCode === 0){
      dispatch(setStatus(status))
    }
    
  })
}
