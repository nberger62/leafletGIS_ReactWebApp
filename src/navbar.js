import React from "react";
import './navbar.css';
import {
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-header">
      <nav>
        <ul>
          <Link to="/">
            <button>Portfolio</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
}