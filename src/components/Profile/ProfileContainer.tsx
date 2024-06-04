import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../redux/profile-reducer";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import React from "react";

type RouterType = {
  userId: string | undefined;
  location: ReturnType<typeof useLocation>;
  navigate: ReturnType<typeof useNavigate>;
  params: ReturnType<typeof useParams>;
};

type PropsType = {
  setUserProfile: (profile: UserProfileType) => void;
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
    let userId: UserIdType = "27842";

    if (
      typeof this.props.router.params !== "string" &&
      "userId" in this.props.router.params
    ) {
      userId = this.props.router.params.userId;

      axios
        .get<UserProfileType>(
          `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
        )
        .then((response) => {
          this.props.setUserProfile(response.data);
        });
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
export default connect(mapStateToProps, { setUserProfile })(
  withRouterProfileContainer
);

// const ProfileContainer = (props: PropsType) => {
//     let { userId } = useParams<{ userId: string }>();

//     useEffect(() => {
//         if (!userId) {
//             userId = '2';
//         }
//         axios
//         .get<UserProfileType>(
//           `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
//         )
//         .then((response) => {
//           props.setUserProfile(response.data);
//         });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [userId]);

//     return <Profile {...props} profile={props.profile}/>;
// }

// const mapStateToProps = (state: any) => ({
//     profile: state.profilePage.profile
// })

// export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
