import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { AppStateType } from "../redux/redux-store";
import { MessagePropsType, addMessageActionCreator, updateNewMessageTextActionCreator } from "../redux/dialogs-reducer";
import { DialogItemPropsType } from "./DialogItem";
import { Dispatch } from "redux";

type MapStatePropsType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateNewMessageText: (text: string) => void;
    addNewMessage: (newMessageBody: string) => void;
  };
export type DialogMapPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
        isAuth: state.auth.isAuth
         }
    }
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

 export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)