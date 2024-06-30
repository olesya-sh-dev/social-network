import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";
import { loginThunkCreator } from "../redux/auth-reducer";
import LoginForm from "./LoginForm";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

type LoginProps = {
  captchaUrl: string | null;
  isAuth: boolean;
  loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: string) => void;
};

const Login: React.FC<LoginProps> = ({ captchaUrl, isAuth, loginThunkCreator }) => {
  const onSubmit = (formData: FormDataType) => {
    loginThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha || ""
    );
  };

  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { loginThunkCreator })(Login);