import React, { Component } from "react";
import Header from "../../shared/Header";
import LoginForm from '../../views/Login/LoginForm';
import i18next from "i18next";
import Footer from "../../shared/Footer";

class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="row form-container">
          <div className="form-container-detail">
             <h1>{i18next.t("Login")}</h1>
             <span>{i18next.t("LoginDetail")}</span>
          </div>
          <div className="form-container-form">
            <LoginForm />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Login;
