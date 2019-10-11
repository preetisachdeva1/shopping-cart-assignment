import React, { Component } from "react";
import Header from "../../shared/Header";
import RegisterForm from "../../views/Register/RegisterForm";
import i18next from "i18next";
import Footer from "../../shared/Footer";

class Registration extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="row form-container">
          <article  className="form-container-detail">
            <header>
              <h1> {i18next.t("Signup")}</h1>
            </header>
            <p> {i18next.t("SignupDetail")}</p>
          </article>
          <article className="form-container-form">
            <RegisterForm />
          </article>
        </section>
        <Footer />
      </>
    );
  }
}

export default Registration;
