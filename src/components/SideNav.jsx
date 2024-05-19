// src/components/SideNav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className="side-nav">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          {/* Add more navigation links if needed */}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;