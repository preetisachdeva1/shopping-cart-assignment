/* src/components/App.js */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/main.scss';
import Routes from '../routes';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../store';
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);