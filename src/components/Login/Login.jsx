import { Field, reduxForm } from "redux-form";
import { login } from "../../Redux/Reducer/authReducer";
import { required } from "../Validators/validators";
import { Input } from "../common/FormsControl/FormsControls";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControl/FormsControls.module.css";

const LoginPage = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) return <Redirect to={"/profile"} />;
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[required]}
          name={"email"}
          type="text"
          placeholder={"E-mail"}
        />
      </div>
      for testing: tashpulatov00@mail.ru
      <div>
        <Field
          component={Input}
          validate={[required]}
          name={"password"}
          type="password"
          placeholder={"Password"}
        />
      </div>
      (password is my current phone number)
      <div>
        <Field component={Input} name={"rememberMe"} type="checkbox" /> Remember
        me
      </div>
      {props.error && <div className={s.errorMessage}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

let mapStateToProps = (state) => ({
  isAuth: state.Auth.isAuth,
});

export default connect(mapStateToProps, { login })(LoginPage);
