import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';
import { routerStore } from './stores/routerStore';

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, routerStore)

async function startApp () {

  ReactDOM.render(
    <Router history={history}>
      <Route component={App} props />
    </Router>
    , document.getElementById('root'))
}

startApp()
