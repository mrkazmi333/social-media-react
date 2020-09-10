import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList } from './';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/711/711284.svg"
              alt="logo"
            />
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
                <li>Log In</li>

                <li>Log Out</li>

                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
