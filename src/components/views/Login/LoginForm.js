import React from "react";
import { Redirect } from "react-router-dom";
import {
  PASSWORD_REG_EXP,
  EMAIL_REG_EXP
} from "../../../common/constants/constants";
import i18next from "i18next";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["username"] = "";
      fields["password"] = "";
      this.setState({ fields: fields, redirect: true });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = i18next.t("EmailReq");
    }
    if (typeof fields["username"] !== "undefined") {
      var pattern = new RegExp(EMAIL_REG_EXP);
      if (!pattern.test(fields["username"])) {
        formIsValid = false;
        errors["username"] = i18next.t("EmailIdValid");
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = i18next.t("PasswordReq");
    }
    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(PASSWORD_REG_EXP)) {
        formIsValid = false;
        errors["password"] = i18next.t("PasswordPattern");
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <section>
        <form role="form"
          aria-label="login"
          name="userLoginForm"
          method="post"
          onSubmit={this.submituserRegistrationForm}
          noValidate
        >
          <div className="input-group">
            <label aria-label="Email" className={this.state.fields.username ? "valid" : ""}>
              {i18next.t("Email")}
            </label>
            <input
              type="email"
              name="username"
              value={this.state.fields.username || ""}
              onChange={this.handleChange}
            />
            <span className="bar"></span>

            <div className="errorMsg">{this.state.errors.username}</div>
          </div>
          <div className="input-group">
            <label aria-label="Password" className={this.state.fields.password ? "valid" : ""}>
              {i18next.t("Password")}
            </label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password || ""}
              onChange={this.handleChange}
            />
            <span className="bar"></span>

            <div className="errorMsg">{this.state.errors.password}</div>
          </div>
          <button aria-label="login" className="btn-primary" type="submit">
            {i18next.t("Login")}
          </button>
        </form>
      </section>
    );
  }
}

export default LoginForm;
