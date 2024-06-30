import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem";
import { Message } from "./Message";
import { DialogMapPropsType } from "./DialogsContainer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Button, ButtonPropsType } from "../Button";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

type FormDataType = {
  newMessageBody: string;
};

export const Dialogs = (props: DialogMapPropsType) => {
  let dialogsElements = props.dialogs.map((el, index) => (
    <DialogItem key={index} name={el.name} id={el.id} img={el.img} />
  ));
  let messagesElements = props.messages.map((el, index) => (
    <Message key={index} message={el.message} id={el.id} />
  ));

  let addMessage = (values: any) => {
    props.addNewMessage(values.newMessageBody);
  };

  //if (!props.isAuth) return <Navigate to="/login" />
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        {/* <AddNewMessageContainer className="s.newMessage" /> */}
        {/* <AddNewMessage className={s.newMessage} addNewMessage={props.addNewMessage} updateNewMessageText={props.updateNewMessageText} newMessageBody={props.newMessageBody}/> */}
        <AddNewMessageFormRedux onSubmit={addMessage} />
      </div>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);
const AddNewMessageForm: React.FC<
  InjectedFormProps<FormDataType & ButtonPropsType>
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your message"
          name="newMessageBody"
          component={Textarea}
          validate={[required, maxLength50]}
        />
      </div>

      <div>
        <Button onClick={props.handleSubmit}>Send</Button>
      </div>
    </form>
  );
};

const AddNewMessageFormRedux = reduxForm<FormDataType & ButtonPropsType>({
  form: "dialogAddMessageForm",
})(AddNewMessageForm);
