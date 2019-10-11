import React, { Component } from "react";
import Header from "../../shared/Header";
import LoginForm from "../../views/Login/LoginForm";
import i18next from "i18next";
import Footer from "../../shared/Footer";

class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="row form-container">
          <article  className="form-container-detail">
            <header>
              <h1>{i18next.t("Login")}</h1>
            </header>
            <p>{i18next.t("LoginDetail")}</p>
          </article>
          <article className="form-container-form">
            <LoginForm />
          </article>
        </section>
        <Footer />
      </>
    );
  }
}

export default Login;
