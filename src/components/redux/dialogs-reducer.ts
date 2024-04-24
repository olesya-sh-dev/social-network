import { v1 } from "uuid";
import { DialogsPropsType, MessagePropsType } from "./state";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state: DialogsPropsType, action: any) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessageItem: MessagePropsType = {
        id: v1(),
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessageItem],
        newMessageBody: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageBody: action.newMessageBody };
    default:
      return state;
  }
};

export const addMessageActionCreator = (newMessageBody: string) => {
    return {
      type: ADD_MESSAGE,
      newMessageBody,
    };
  };
  export const updateNewMessageTextActionCreator = (text: string) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newMessageBody: text,
    };
  };