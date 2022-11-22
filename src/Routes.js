import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReminderApp from './Birthday-Reminder-Functional-component/App'
import CRemainderApp from './Birthday-Reminder-ClassComponent/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/ReminderApp'>RemainderApp</Link>
          </li>
          <li>
            <Link to='/CReminderApp'>CRemainderApp</Link>
          </li>
        </ul>
        <hr />
        <Route path='/ReminderApp' component={ReminderApp} />
        <Route path='/CReminderApp' component={CRemainderApp} />
      </div>
    </Router>
  )
}

export default Routing
