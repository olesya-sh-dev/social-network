import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { AppStateType } from "../redux/redux-store";
import { MessagePropsType } from "../redux/dialogs-reducer";
import { DialogItemPropsType } from "./DialogItem";

type MapStatePropsType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
}
export type DialogMapPropsType = MapStatePropsType
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
         }
    }
 export const DialogsContainer = connect(mapStateToProps)(Dialogs)