import { connect } from "react-redux";
import { AppStateType } from "./redux/redux-store";
import { AddNewMessage } from "./AddNewMessage";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "./redux/dialogs-reducer";
import { Dispatch } from "redux";

type MapStatePropsType = {
  newMessageBody: string;
};
type MapDispatchPropsType = {
  updateNewMessageText: (text: string) => void;
  addNewMessage: (newMessageBody: string) => void;
};

export type AddNewMessageMapPropsType = MapStatePropsType &
  MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    newMessageBody: state.dialogsPage.newMessageBody,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    updateNewMessageText: (text: string) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addNewMessage: (newMessageBody: string) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};

export const AddNewMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewMessage);
