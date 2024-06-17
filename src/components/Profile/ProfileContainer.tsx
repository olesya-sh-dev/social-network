import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import React from "react";
import { getStatus, getUserProfileThunkCreator, updateStatus } from "../redux/profile-reducer";
import { AppStateType } from "../redux/redux-store";
import { compose } from "redux";

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
  isAuth: boolean;
  getStatus: (userId: number) => void;
  status: string;
  updateStatus: (status: string) => void;

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
    let userId: UserIdType = "31073";

    if (
      typeof this.props.router.params !== "string" &&
      "userId" in this.props.router.params
    ) {
      userId = this.props.router.params.userId;
      this.props.getUserProfileThunkCreator(Number(userId));
    } else {
      this.props.getUserProfileThunkCreator(Number(userId));
    }
   
    this.props.getStatus(Number(userId))
    }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    ) 
  }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let AuthRedirectComponent = (props: PropsType) => {
//   if(!props.isAuth) return <Navigate to={'/login'}/>
//   return <ProfileContainer {...props} />;
// };
let mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  //isAuth: state.auth.isAuth
});

// let WithRouterProfileContainer = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, { getUserProfileThunkCreator })(
//   WithRouterProfileContainer
// )

// export default compose (
//   connect(mapStateToProps, { getUserProfileThunkCreator }),
//   withRouter,
//   withAuthRedirect
// )
//   (ProfileContainer)

export default compose<React.ComponentType>(
  withRouter,
  //withAuthRedirect,
  connect(mapStateToProps, { getUserProfileThunkCreator, getStatus, updateStatus }),
)(ProfileContainer);
