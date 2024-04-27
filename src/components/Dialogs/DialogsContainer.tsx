import { connect } from "react-redux";
import { ActionsDialogsType, addMessageActionCreator, updateNewMessageTextActionCreator } from "../redux/dialogs-reducer";

import { Dialogs } from "./Dialogs";
let mapStateToProps = (state: any) => {
    return{
        dialogsPage: state.dialogsPage
    }
    }
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return{
        UpdateNewMessageTextActionType:(text: string)=>{
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessageActionCreator: (newMessageBody: string) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}    

export const DialogsContainer = connect(mapDispatchToProps, mapStateToProps)(Dialogs)