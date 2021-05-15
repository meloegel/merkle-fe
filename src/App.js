import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css'

import Home from './components/Home'
import Register from './components/Register'
import UserReport from './components/UserReport'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/userReport' component={UserReport} />
      </Switch>
    </Router>
  );
}

export default App;
