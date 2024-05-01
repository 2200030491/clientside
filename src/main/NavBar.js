import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Nav.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link" activeClassName="active">
            Sign Up
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
};

export default NavBar;
