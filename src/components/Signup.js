import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, startSignup, clearAuthState } from '../actions/auth';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  handleConfirmPasswordChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    console.log('this.state', this.state);
    const { email, password, confirmPassword, name } = this.state;

    if (name && email && password && confirmPassword) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(email, password, confirmPassword, name));
    }
  };

  render() {
    const { error, inProgress, isLoggedIn } = this.props.auth;
    if (isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        {error && <div className="alert-error-dialog">{error}</div>}
        <div className="field">
          <input
            type="text"
            placeholder="Your Name"
            required
            onChange={this.handleNameChange}
            value={this.state.name}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>

        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            required
            onChange={this.handleConfirmPasswordChange}
            value={this.state.confirmPassword}
          />
        </div>

        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Signing Up...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Sign Up
            </button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Signup);
