import React from "react";
import { Redirect } from "react-router-dom";
import {
  PASSWORD_REG_EXP,
  EMAIL_REG_EXP
} from "../../../common/constants/constants";
import i18next from "i18next";

class RegistrationForm extends React.Component {
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
    //this.validateForm();
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ fields: {}, redirect: true });
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    console.log("de", fields, typeof fields["password"]);
    if (!fields["fname"]) {
      formIsValid = false;
      errors["fname"] = i18next.t("fnameReq");
    }
    if (!fields["lname"]) {
      formIsValid = false;
      errors["lname"] = i18next.t("lnameReq");
    }
    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = i18next.t("EmailReq");
    }
    if (fields["emailid"] !== "") {
      var pattern = new RegExp(EMAIL_REG_EXP);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = i18next.t("EmailIdValid");
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
    if (!fields["cpassword"]) {
      formIsValid = false;
      errors["cpassword"] = i18next.t("confirmPassword");
    }
    if (
      fields["password"] &&
      fields["cpassword"] &&
      fields["password"] !== fields["cpassword"]
    ) {
      formIsValid = false;
      errors["cpassword"] = i18next.t("SamePassword");
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
        <form
          role="form"
          aria-label="registration"
          name="userLoginForm"
          method="post"
          onSubmit={this.submituserRegistrationForm}
          noValidate
        >
          <div className="input-group">
            <label aria-label="first name" className={this.state.fields.fname ? "valid" : ""}>
              {i18next.t("fname")}
            </label>
            <input
              type="text"
              name="fname"
              value={this.state.fields.fname || ''}
              onChange={this.handleChange}
            />
            <span className="bar"></span>

            <div className="errorMsg">{this.state.errors.fname}</div>
          </div>
          <div className="input-group">
            <label aria-label="last name" className={this.state.fields.lname ? "valid" : ""}>
              {i18next.t("lname")}
            </label>
            <input
              type="text"
              name="lname"
              value={this.state.fields.lname || ''}
              onChange={this.handleChange}
            />
            <span className="bar"></span>

            <div className="errorMsg">{this.state.errors.lname}</div>
          </div>
          <div className="input-group">
            <label aria-label="Email" className={this.state.fields.emailid ? "valid" : ""}>
              {i18next.t("Email")}
            </label>
            <input
              type="email"
              name="emailid"
              value={this.state.fields.emailid || ''}
              onChange={this.handleChange}
            />
            <span className="bar"></span>

            <div className="errorMsg">{this.state.errors.emailid}</div>
          </div>
          <div className="input-group">
            <label aria-label="Password" className={this.state.fields.password ? "valid" : ""}>
              {i18next.t("Password")}
            </label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password || ''}
              onChange={this.handleChange}
            />
            <span className="bar"></span>

            <div className="errorMsg">{this.state.errors.password}</div>
          </div>
          <div className="input-group">
            <label aria-label="confirm password" className={this.state.fields.cpassword ? "valid" : ""}>
              {i18next.t("ConPassword")}
            </label>
            <input
              type="password"
              name="cpassword"
              value={this.state.fields.cpassword || ''}
              onChange={this.handleChange}
            />
            <span className="bar"></span>

            <div className="errorMsg">{this.state.errors.cpassword}</div>
          </div>
          <button aria-label="registration" className="btn-primary" type="submit">
            {i18next.t("Signup")}
          </button>
        </form>
      </section>
    );
  }
}

export default RegistrationForm;
