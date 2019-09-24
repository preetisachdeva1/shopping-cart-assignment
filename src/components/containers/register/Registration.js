import React, { Component } from "react";
import Header from "../../shared/Header";
import RegisterForm from '../../views/Register/RegisterForm';
import i18next from "i18next";
import Footer from "../../shared/Footer";

class Registration extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <section className="row login">
          <div className="login-detail">
             <h2> {i18next.t("Signup")}</h2>
             <span> {i18next.t("SignupDetail")}</span>
          </div>
          <div className="login-form">
            <RegisterForm />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Registration;
