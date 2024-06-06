import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { setAuthUserDataAC } from "../redux/auth-reducer";
import { authAPI } from "../../api/api";


export type Data = {
	id: number;
	login: string;
	email: string;
}
export type AuthResponseDataType = {
	data: Data;
	messages: any[];
	fieldsErrors: any[];
	resultCode: number;
}

export type HeaderPropsType = {
    setAuthUserDataAC: (userId: number, email: string, login: string) => void;
    isAuth: boolean;
    login: string;
};
class HeaderContainer extends React.Component <HeaderPropsType> {
    componentDidMount() {
    authAPI.me()
      .then((response) => {
        console.log(response.data);
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            this.props.setAuthUserDataAC(id, email, login);
        }
      }
      );
    }
    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect (mapStateToProps, {setAuthUserDataAC})(HeaderContainer);