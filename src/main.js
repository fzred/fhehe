import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Index from './components/index'
import Login from './components/login'
import App from './components/app'

injectTapEventPlugin()

ReactDOM.render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/index" component={Index}></Route>
      <Route path="/login" component={Login}></Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'))
