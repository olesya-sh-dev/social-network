import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import {logoutThunkCreator } from "../redux/auth-reducer";





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
    //getAuthUserDataThunkCreator: any
        isAuth: boolean;
    login: string;
    logoutThunkCreator: any
};
class HeaderContainer extends React.Component <HeaderPropsType> {
    // componentDidMount() {
    //     this.props.getAuthUserDataThunkCreator();
    // }
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

export default connect (mapStateToProps, {  logoutThunkCreator})(HeaderContainer);