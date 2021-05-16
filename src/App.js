import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom"
import './App.css'

import Home from './components/Home'
import Register from './components/Register/Register'
import UserReport from './components/UserReport/UserReport'
import ConfomationPage from './components/Register/ConformationPage'
import ErrorPage from './components/Register/ErrorPage'

function App() {
  return (
    <Router>
      <nav>
        <NavLink to='/' className='nav'>Home</NavLink>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/userReport' component={UserReport} />
        <Route path='/conformation' component={ConfomationPage} />
        <Route path='/error' component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
