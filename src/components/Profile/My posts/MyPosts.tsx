import { Post } from "./Post/Post";
import s from "./../../Profile/Profile.module.css";
import { MyPostsMapPropsType } from "./MyPostsContainer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { ButtonPropsType } from "../../Button";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import React from "react";

type FormDataType = {
  newPostText: string;
};

export const MyPosts = React.memo((props: MyPostsMapPropsType) => {
  let postsElements = props.posts.map((p, index) => (
    <Post key={index} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  let onAddPost = (values: any) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      My post
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm: React.FC<
  InjectedFormProps<FormDataType & ButtonPropsType>
> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder="Enter your message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm<FormDataType & ButtonPropsType>({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);
