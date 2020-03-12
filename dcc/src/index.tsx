import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createBrowserHistory } from 'history'
import { Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';
import { routerStore } from './stores/routerStore';
import { ThemeProvider, createMuiTheme, StylesProvider } from '@material-ui/core';
import { defaultTheme } from './theme'
import { configure } from 'mobx';

configure({
  enforceActions: 'always'
})

const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, routerStore)

async function startApp () {

  const theme = createMuiTheme(defaultTheme)

  ReactDOM.render(
    <Router history={history}>
      <StylesProvider injectFirst >
        <ThemeProvider theme={theme}>
          <Route component={App} props />
        </ThemeProvider>
      </StylesProvider>
    </Router>
    , document.getElementById('root'))
}

startApp()
