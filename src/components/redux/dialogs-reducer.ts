import { v1 } from "uuid";
import { DialogsPropsType, MessagePropsType } from "./store";

// const ADD_MESSAGE = "ADD-MESSAGE";
// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export type AddMessageActionType = ReturnType<typeof addMessageActionCreator>;
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextActionCreator>;

export type ActionsDialogsType = AddMessageActionType
  | UpdateNewMessageTextActionType
 
let initialState = {
  dialogs: [
    {
      id: "1",
      name: "Dimych",
      img: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303073.jpg?w=826&t=st=1712399351~exp=1712399951~hmac=27776bd4ae88075e2fe852104bd704e20c8e84863033d0a0a3cc2c401aa3788e",
    },
    {
      id: "2",
      name: "Andrey",
      img: "https://img.freepik.com/premium-psd/3d-male-cartoon-character-avatar_235528-1107.jpg?w=826",
    },
    {
      id: "3",
      name: "Sveta",
      img: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671153.jpg?w=826&t=st=1712399497~exp=1712400097~hmac=69cb6df93dcd7c811600177351c76f0fca7f90ccabf153219cda3ca6300555b8",
    },
    {
      id: "4",
      name: "Sasha",
      img: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses-half-shaved-head_23-2149436187.jpg?w=826&t=st=1712403062~exp=1712403662~hmac=e62bc0ce0c09a228ccd830a9602cf1bb1c5ae0afb194b693fdc7c0ecfabbd575",
    },
    {
      id: "5",
      name: "Viсtor",
      img: "https://img.freepik.com/free-psd/3d-illustration-bald-person_23-2149436183.jpg?w=826&t=st=1712403186~exp=1712403786~hmac=eff4fc6d688446f61747a361e7fab73eac4b5b29e4a9733043bebfb70d588081",
    },
    {
      id: "6",
      name: "Valera",
      img: "https://img.freepik.com/premium-psd/3d-render-cartoon-avatar-isolated_570939-88.jpg?w=826",
    },
  ],
  messages: [
    { id: "1", message: "Hi" },
    { id: "2", message: "How is your React?" },
    { id: "3", message: "Yo" },
    { id: "4", message: "Yo" },
    { id: "5", message: "Yo" },
  ],
  newMessageBody: "type a message here...",
};
export const dialogsReducer = (
  state: DialogsPropsType = initialState,
  action: ActionsDialogsType
) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      let newMessageItem: MessagePropsType = {
        id: v1(),
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessageItem],
        newMessageBody: "type",
      };
    case "UPDATE-NEW-MESSAGE-TEXT":
      return { ...state, newMessageBody: action.text };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody: string) => {
  return {
    type: "ADD-MESSAGE",
    newMessageBody,
  } as const
};
export const updateNewMessageTextActionCreator = (text: string) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    text
  } as const
};
