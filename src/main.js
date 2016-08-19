import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Index from './components/index'
import App from './components/app'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/index" component={Index}></Route>
  </Router>
), document.getElementById('app'))
