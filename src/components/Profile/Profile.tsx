import { MyPostsContainer } from "./My posts/MyPostsContainer";

import { UserProfileType } from "./ProfileContainer";

import { ProfileInfo } from "./ProfileInfo";

export type ProfilePropsType = {
  profile: UserProfileType;
  status: string;
  updateStatus: (status: string) => void;
  isOwner: boolean;
  savePhoto: (file: any) => void;
  saveProfile: (formData: any) => Promise<any>;
};
export const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      {/* <img src="https://plus.unsplash.com/premium_photo-1709493205281-cf7a93041a16?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />*/}

      <ProfileInfo
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};
