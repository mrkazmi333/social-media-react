import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser, clearAuthState } from '../actions/auth';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
      clientMessage: '',
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };

  handleSave = () => {
    const { password, confirmPassword, name } = this.state;
    const { user } = this.props.auth;

    if (password && !confirmPassword) {
      this.setState({
        clientMessage: 'Confirm Password Cant be left blank',
      });
      console.log('confirmPassword Cant be left blank');
      return;
    }
    if (!password && confirmPassword) {
      this.setState({
        clientMessage: 'Password Cant be left blank',
      });
      console.log('Password Cant be left blank');
      return;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      this.setState({
        clientMessage: 'Password and ConfirmPassword did not matched',
      });
      console.log('Password and ConfirmPassword did not matched');
      return;
    }
    this.props.dispatch(editUser(name, password, confirmPassword, user._id));
  };
  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  render() {
    const { user, error } = this.props.auth;
    const { editMode, clientMessage } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            alt=""
            src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
          />
        </div>

        {clientMessage && (
          <div className="alert-error-dialogue">{clientMessage}</div>
        )}
        {error && <div className="alert-error-dialogue">{error}</div>}
        {error === false && (
          <div className="alert-success-dialogue">
            Successfully Updated Profile!
          </div>
        )}
        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-label">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
          {editMode ? (
            <input
              type="text"
              onChange={(e) => this.handleChange('name', e.target.value)}
              value={this.state.name}
            />
          ) : (
            <div className="field-label">{user.name}</div>
          )}
        </div>

        {editMode && (
          <div className="field">
            <div className="field-label">New Password</div>
            <input
              type="password"
              onChange={(e) => this.handleChange('password', e.target.value)}
              value={this.state.password}
            />
          </div>
        )}

        {editMode && (
          <div className="field">
            <div className="field-label">Confirm Password</div>
            <input
              type="password"
              onChange={(e) =>
                this.handleChange('confirmPassword', e.target.value)
              }
              value={this.state.confirmPassword}
            />
          </div>
        )}

        <div className="btn-grp">
          {editMode ? (
            <button className="button-save=btn" onClick={this.handleSave}>
              Save
            </button>
          ) : (
            <button
              className="button-edit-btn"
              onClick={() => this.handleChange('editMode', true)}
            >
              Edit Profile
            </button>
          )}

          {editMode && (
            <div
              className="go-back"
              onClick={() => this.handleChange('editMode', true)}
            >
              Go Back
            </div>
          )}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Settings);
