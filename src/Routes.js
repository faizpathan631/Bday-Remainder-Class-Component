import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReminderApp from '../src/Birthday-Reminder/App'

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path='/ReminderApp'>
          <ReminderApp />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing
