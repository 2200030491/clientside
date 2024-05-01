import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const UserBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/transfer" className="nav-link" activeClassName="active">
            Transfer
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/loan" className="nav-link" activeClassName="active">
            Apply loan
          </NavLink>
        </li>
        
        
      </ul>
    </nav>
  );
};

export default UserBar;
