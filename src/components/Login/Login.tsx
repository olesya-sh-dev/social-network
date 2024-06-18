import React, { Component } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  console.log("rerender");
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" component={"input"} />
      </div>
      <div>
        <Field placeholder="password" name="password" component={"input"} />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={"input"} />
        remember me
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm<FormDataType>({
  form: "login",
})(LoginForm);

const Login = () => {
  const onSubmit = (formData: FormDataType) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
