import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.auth.user.name,
      password: '',
      confirmPassword: '',
      editMode: false,
    };
  }

  handleChange = (fieldName, val) => {
    this.setState({
      [fieldName]: val,
    });
  };
  render() {
    const { user } = this.props.auth;
    const { editMode } = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            alt=""
            src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
          />
        </div>
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
            <button className="button-save=btn">Save</button>
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
