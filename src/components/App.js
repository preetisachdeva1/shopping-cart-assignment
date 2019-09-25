/* src/components/App.js */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../stylesheets/main.scss";
import Routes from "../routes";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "../store";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <I18nextProvider i18n={i18n}>
        <Routes />
      </I18nextProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
