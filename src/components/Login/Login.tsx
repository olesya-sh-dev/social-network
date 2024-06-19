import React, { Component } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators";
import { connect } from "react-redux";
import { loginThunkCreator } from "../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../redux/redux-store";
import style from "../common/FormsControls/FormsControls.module.css";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  console.log("rerender");
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="email"
          name="email"
          validate={[required]}
          component={Input}
          type="email"
        />
      </div>
      <div>
        <Field
          placeholder="password"
          name="password"
          validate={[required]}
          component={Input}
          type="password"
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={Input} />
        remember me
      </div>
      {props.error && <div className={style.formSummaryError}>
        {props.error}
        </div>
      }
      <div>
        <button>login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);

const Login = (props: any) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginThunkCreator(
      formData.email,
      formData.password,
      formData.rememberMe
    );
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { loginThunkCreator })(Login);
