import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './navbar';
import './App.css';
import Project from "./project";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Project />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;