import React, { useState } from "react";
import { Preloader } from "../common/Preloader";
import s from "../Profile/Person/Person.module.css";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import userPhoto from "./../../assets/images/user.jpg";
import { UserProfileType } from "./ProfileContainer";
import ProfileDataFormReduxForm from "./ProfileDataForm";

type ProfileInfoPropsType = {
  profile: UserProfileType;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: any) => void;
  saveProfile: (formData: any) => Promise<any>;
};

export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  savePhoto,
  isOwner,
  saveProfile,
}: ProfileInfoPropsType) => {
  const [editMode, setEditMode] = useState(false);
  
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData: any) => {
   saveProfile(formData).then(()=>{setEditMode(false)})
    }
 

  return (
    <div>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1709493205281-cf7a93041a16?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className={s.info}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />

        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataFormReduxForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            onMainPhotoSelected={onMainPhotoSelected}
            goToEditMode={() => setEditMode(true)}
          />
        )}
      </div>

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }: any) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

const ProfileData = ({
  profile,
  isOwner,
  goToEditMode,
}: any) => {
  return (
    <div className={s.description}>
      {isOwner && <button onClick={goToEditMode}>edit</button>}
      <span>
        <b>Full name: </b>
        {profile.fullName}
      </span>
      <span>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </span>
      {profile.lookingForAJob && (
        <span>
          <b>My professional skills: </b>
          {profile.lookingForAJobDescription}
        </span>
      )}
      <span>
        <b>About me: </b>
        {profile.aboutMe}
      </span>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={
                profile.contacts[key as keyof typeof profile.contacts]
              }
            />
          );
        })}
      </div>
    </div>
  );
};