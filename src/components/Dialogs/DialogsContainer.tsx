import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { AppStateType } from "../redux/redux-store";
import {
  MessagePropsType,
  addMessageActionCreator,
  //updateNewMessageTextActionCreator,
} from "../redux/dialogs-reducer";
import { DialogItemPropsType } from "./DialogItem";
import { Dispatch, compose } from "redux";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
  dialogs: DialogItemPropsType[];
  messages: MessagePropsType[];
  //newMessageBody: string;
  //isAuth: boolean
};
type MapDispatchPropsType = {
 //updateNewMessageText: (text: string) => void;
  addNewMessage: (newMessageBody: string) => void;
};
export type DialogMapPropsType = MapStatePropsType & MapDispatchPropsType;
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    //newMessageBody: state.dialogsPage.newMessageBody,
    //isAuth: state.auth.isAuth
  };
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    // updateNewMessageText: (text: string) => {
    //   dispatch(updateNewMessageTextActionCreator(text));
    // },
    addNewMessage: (newMessageBody: string) => {
      dispatch(addMessageActionCreator(newMessageBody));
    },
  };
};

export default compose<React.ComponentType>(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
//let DialogsRedirectComponent = withAuthRedirect(Dialogs);

// let DialogsRedirectComponent = (props: DialogMapPropsType) => {
//   if(!props.isAuth) return <Navigate to={'/login'}/>
//   return <Dialogs {...props} />;
// }; вынесено в отдельный компонент

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsRedirectComponent)
