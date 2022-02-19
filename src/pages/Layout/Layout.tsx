import React, { Component } from 'react'
import {Link, Outlet} from "react-router-dom";
import '../../index.css';
import "./Layout.css";

export class Layout 
 extends Component {
  render() {
    return (
      <>
      <header>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/playlist">Playlist</Link>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-item nav-link-secondary">
              <Link className="nav-link" to="/signIn">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-button" to="/signUp">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      </>
      
    )
  }
}

export default Layout;
