import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Player from '../containers/Player';
import { NotFound } from '../containers/NotFound';
import { Layout } from '../components/Layout'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/player/:id" component={Player}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={Login}/>
        <Route exact path="/logout" component={Register}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </Router>
)

export default App
