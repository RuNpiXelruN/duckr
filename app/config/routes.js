import React from 'react'
import { hashHistory, Router, IndexRoute, Route } from 'react-router'
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer } from 'containers'

export default function getRoutes (checkAuth) {

}

const routes = (
  <Router hsitory={hashHistory} >
    <Router path='/' component={MainContainer} >
      <Route path='auth' component={AuthenticateContainer} />
      <Route path='feed' component={FeedContainer} />
      <IndexRoute component={HomeContainer} />
    </Router>
  </Router>
)

export default routes
