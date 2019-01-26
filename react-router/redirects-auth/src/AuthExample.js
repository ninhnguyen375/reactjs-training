import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
function AuthExample() {
  return (
    <Router>
      <div>
        <AuthButton></AuthButton>
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component="Public"></Route>
        <Route path="/login" component="Login"></Route>
        <PrivateRoute path="/protected" component="Protected"></PrivateRoute>
      </div>
    </Router>
  )
}

const AuthButton = withRouter((history) => {

})

export default AuthExample