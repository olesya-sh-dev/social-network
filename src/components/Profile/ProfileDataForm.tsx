import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../common/FormsControls/FormsControls";
import s from "./Person/Person.module.css";
import style from "../common/FormsControls/FormsControls.module.css";
import { UserProfileType } from "./ProfileContainer";

type ProfileDataFormPropsType = {
  profile: UserProfileType;
};

const ProfileDataForm: React.FC<
  InjectedFormProps<UserProfileType, ProfileDataFormPropsType> &
    ProfileDataFormPropsType
> = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
    {error && <div className={style.formSummaryError}>{error}</div>}
      <div>
        <button>save</button>
      </div>
    
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
      <div>
        <b>About me</b>: {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {profile.contacts &&
          Object.keys(profile.contacts).map((key) => {
            return (
              <div className={s.contact} key={key}>
                <b>{key}:</b> {createField(key, "contacts." + key, [], Input)}
              </div>
            );
          })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm<
  UserProfileType,
  ProfileDataFormPropsType
>({
  form: "edit-profile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
