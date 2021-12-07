import React from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import Home from './Home'

export default function App() {
  return (
    <>
      <Switch>
        <Route strict exact path="/home" component={Home} />

        <Redirect from="/" to="/home" />
      </Switch>
    </>
  )
}
