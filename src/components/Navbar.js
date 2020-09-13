import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

class Navbar extends React.Component {
  logOut = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  render() {
    const { auth } = this.props;
    // console.log('auth', auth);
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
          {auth.isLoggedIn && (
            <div className="user">
              <Link to="/settings">
                <img
                  src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
                  alt="user-dp"
                  id="user-dp"
                />
              </Link>
              <span>{auth.user.name}</span>
            </div>
          )}

          <div className="nav-links">
            <ul>
              {!auth.isLoggedIn && (
                <li>
                  <Link to="/login">Log In</Link>
                </li>
              )}

              {auth.isLoggedIn && <li onClick={this.logOut}>Log Out</li>}

              {!auth.isLoggedIn && (
                <li>
                  <Link to="/signup">Register</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Navbar);
