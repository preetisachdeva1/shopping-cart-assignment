import React, { Component } from "react";
import Header from "../../shared/Header";
import RegisterForm from '../../views/Register/RegisterForm';
import i18next from "i18next";
import Footer from "../../shared/Footer";

class Registration extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="row form-container">
          <div className="form-container-detail">
             <h2> {i18next.t("Signup")}</h2>
             <span> {i18next.t("SignupDetail")}</span>
          </div>
          <div className="form-container-form">
            <RegisterForm />
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Registration;
