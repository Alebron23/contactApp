import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <div className="header-container">
    <div className="header">
      <ul className="header-items">
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
          <li>ACS Technologies Contact App </li>
        </Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact_list">
          <li className="list-item first">Contact List</li>
        </Link>
        <Link style={{ color: 'white', textDecoration: 'none' }} to="/add_contact">
          <li className="list-item">Add Contact </li>
        </Link>
      </ul>
    </div>
  </div>
)

export default Header