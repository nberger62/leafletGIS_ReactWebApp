import React from "react";
import './navbar.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
      <div className="navbar-header">
        <nav>
          <ul>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
            <Link to="/services">
              <button>Services</button>
            </Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
  );
}

function About() {
  return <h2>We are a Geospatial Analysis Team</h2>;
}

function Contact() {
  return <h2>Contact us for a quote today on GIS services!</h2>;
}

function Home() {
  return <h2>Welcome to Nate's Global!</h2>;
}

function Services() {
  return <h2>Check out these GIS services that we provide</h2>;
}

