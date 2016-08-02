import React from 'react'
import { hashHistory, Router, IndexRoute, Route } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer } from 'containers'

const routes = (
  <Router hsitory={hashHistory} >
    <Router path='/' component={MainContainer} >
      <Route path='auth' component={AuthenticateContainer} />
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
