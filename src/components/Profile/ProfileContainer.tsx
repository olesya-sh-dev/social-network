import React from "react";
import { Profile } from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../redux/profile-reducer";

type PropsType = {
    setUserProfile: (profile: any) => void
    profile: any
}

export type ContactType = {
	facebook: string;
	website?: any;
	vk: string;
	twitter: string;
	instagram: string;
	youtube?: any;
	github: string;
	mainLink?: any;
}

export type PhotoType = {
	small: string;
	large: string;
}

export type UserProfileType = {
	aboutMe: string;
	contacts: ContactType;
	lookingForAJob: boolean;
	lookingForAJobDescription: string;
	fullName: string;
	userId: number;
	photos: PhotoType;
}
class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios
        .get<UserProfileType>(
          `https://social-network.samuraijs.com/api/1.0/profile/2`
        )
        .then((response) => {
          this.props.setUserProfile(response.data);
        });
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);