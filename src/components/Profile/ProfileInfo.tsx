import { Preloader } from "../common/Preloader";
import s from "../Profile/Person/Person.module.css";
import ProfileStatus from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import userPhoto from "./../../assets/images/user.jpg";

type ProfileInfoPropsType = {
  profile: any;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: any) => void;
};
export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}: ProfileInfoPropsType) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e: any) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1709493205281-cf7a93041a16?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className={s.info}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <div className={s.description}>
          <span>{profile.fullName}</span>
          <span>{profile.aboutMe}l</span>
          <span>Ищу работу: {profile.lookingForAJobDescription}</span>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};
