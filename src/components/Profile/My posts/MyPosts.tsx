import { Post } from "./Post/Post";
import s from "./../../Profile/Profile.module.css";
import { MyPostsMapPropsType } from "./MyPostsContainer";
import { Field, reduxForm } from "redux-form";



export const MyPosts = (props: MyPostsMapPropsType) => {

  let postsElements = props.posts.map((p, index) => (
    <Post key={index} id={p.id} message={p.message} likesCount={p.likesCount} />
  ));
let onAddPost = (values: any) => {
  props.addPost(values.newPostText)
}

  return (
    <div>
      My post
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};


let AddNewPostForm = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newPostText"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);