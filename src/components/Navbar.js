import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="nav">
      <div className="left-div">
        <Link to="/">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/3449/3449702.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://www.flaticon.com/svg/static/icons/svg/1007/1007692.svg"
          alt="search-icon"
        />
        <input placeholder="Search" />
        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
                alt="user avatar"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
                alt="user avatar"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
            alt="user-dp"
            id="user-dp"
          />
          <span>John Doe</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>

            <li>
              <Link to="/logout">Log Out</Link>
            </li>

            <li>
              <Link to="/singup">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
