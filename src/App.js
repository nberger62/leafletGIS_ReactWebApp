import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './navbar';
import Map from './map';
import Three from './three';
import {WebMapView} from './webMapView';
import './App.css';
import SceneView from './sceneView';
import Project from "./project";
import ContactForm from './ContactForm';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // get the data from the server
    // make a get request to `/api/rivers`
    // that will return the JSON of rivers
    // console log that JSON data
  let d = {};
  fetch('http://localhost:8080/api/rivers')
    .then(function (response) {
      return response.json();
    })
    .then((data)  => {
      d = data;
      console.log('data variable from fetch', data)
      this.setState({
        geoData: data,
      })
      // console.log(data);
    });
    console.log('after fetch')
    console.log('d variable', d);
    // set the component's state to the data
  }

  render() {
    console.log('component state in render', this.state);

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/services/3d">
              <Three />
              <SceneView />
            </Route>
            <Route path="/services">
              <Services />
              <Map geoData={this.state.geoData} />
              <WebMapView />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/portfolio">
              <h1>Predictive analysis of active COVID-19 cases in the state of Georgia</h1>
              <Project />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


function About() {
  return <h2>We are a Geospatial Analysis Team</h2>;
}

function Home() {
  return <h2>Welcome to Nate's Global!</h2>;
}

function Services() {
  return (
    <>
      <Switch>
        <Route exact path="/services/3d">
          <Three />
          <SceneView />
        </Route>
        <Route exact path="/services/map">
          <Map />
        </Route>
      </Switch>
    </>
  );
}

function Portfolio() {
  return (
      <>
        <Switch>
          <Route exact path="/portfolio">
            <Project />
          </Route>
        </Switch>
      </>
  );
}


export default App;