import { Preloader } from "../common/Preloader";
import s from "../Profile/Person/Person.module.css";
import ProfileStatus from "./ProfileStatus";


type ProfileInfoPropsType = {
  profile: any;
  status: string;
  updateStatus: (status: string) => void;
};
export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1709493205281-cf7a93041a16?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
      <div className={s.info}>
        <img src={props.profile.photos.large} />
        <div className={s.description}>
          <span>{props.profile.fullName}</span>
          <span>{props.profile.aboutMe}l</span>
          <span>Ищу работу: {props.profile.lookingForAJobDescription}</span>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>
    </div>
  );
};
