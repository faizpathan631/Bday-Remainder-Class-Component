import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RemainderApp from './Birthday-Reminder-ClassComponent/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/ReminderApp'>
              B'day Remainder App in class component
            </Link>
          </li>
        </ul>
        <hr />
        <Route path='/ReminderApp' component={RemainderApp} />
      </div>
    </Router>
  )
}

export default Routing
