import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Index from './components/index'
import Login from './components/login'
import App from './components/app'
import AddLog from './components/add-log'
import './css/main.css'

injectTapEventPlugin()

ReactDOM.render((
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/index" component={Index}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/add-log" component={AddLog}></Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'))
