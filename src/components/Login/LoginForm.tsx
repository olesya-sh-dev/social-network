import React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import style from "../common/FormsControls/FormsControls.module.css";
import { createField } from "../common/FormsControls/FormsControls";

type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

type LoginFormOwnProps = {
  captchaUrl: string | null;
};

type LoginFormProps = InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps;

const LoginForm: React.FC<LoginFormProps> = ({ handleSubmit, captchaUrl, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", [required], Input)}
      {createField("Password", "password", [required], Input, {
        type: "password",
      })}
      {createField(
        "",
        "rememberMe",
        [],
        Input,
        { type: "checkbox" },
        "remember me"
      )}

      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && createField("Symbols from image", "captcha", [required], Input)}

      {error && (
        <div className={style.formSummaryError}>{error}</div>
      )}
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

export default reduxForm<FormDataType, LoginFormOwnProps>({
  form: "login",
})(LoginForm);