import React, { Component } from 'react'
import { NavbarComponent } from './components'
import { Home, Success } from './pages'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Success" component={Success} exact/>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
