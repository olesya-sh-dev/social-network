import { Profile } from "./Profile";
import { connect } from "react-redux";

import { useLocation, useParams, useNavigate } from "react-router-dom";
import React from "react";
import { getUserProfileThunkCreator } from "../redux/profile-reducer";

type RouterType = {
  userId: string | undefined;
  location: ReturnType<typeof useLocation>;
  navigate: ReturnType<typeof useNavigate>;
  params: ReturnType<typeof useParams>;
};

type PropsType = {
  getUserProfileThunkCreator: (userId: number) => void;
  profile: UserProfileType;
  router: RouterType;
};

export type ContactType = {
  facebook: string;
  website?: any;
  vk: string;
  twitter: string;
  instagram: string;
  youtube?: any;
  github: string;
  mainLink?: any;
};

export type PhotoType = {
  small: string;
  large: string;
};

export type UserProfileType = {
  aboutMe: string;
  contacts: ContactType;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotoType;
};

function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    type UserIdType = string | undefined;
    let userId: UserIdType = "2";

    if (
      typeof this.props.router.params !== "string" &&
      "userId" in this.props.router.params
    ) {
      userId = this.props.router.params.userId;
      this.props.getUserProfileThunkCreator(Number(userId));
    }
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state: any) => ({
  profile: state.profilePage.profile,
});

let withRouterProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfileThunkCreator })(
  withRouterProfileContainer
);