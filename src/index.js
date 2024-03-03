import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HomePage from './views/home-page'
import Exercise from './views/exercise'
import Login from './views/login'
import Settings from './views/settings'
import JournalInputDefault from './views/journal-input-default'
import Hygiene from './views/hygiene'
import Resources from './views/resources'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path="/home-page" />
        <Route component={Exercise} exact path="/exercise" />
        <Route component={Login} exact path="/" />
        <Route component={Settings} exact path="/settings" />
        <Route
          component={JournalInputDefault}
          exact
          path="/journal-input-default"
        />
        <Route component={Hygiene} exact path="/hygiene" />
        <Route component={Resources} exact path="/resources" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
