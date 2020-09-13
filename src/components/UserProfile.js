import React, { Component } from 'react';
import { fetchUserProfile } from '../actions/profile';
import { connect } from 'react-redux';

class UserProfile extends Component {
  componentDidMount() {
    const { match } = this.props;

    if (match.params.userId) {
      //dispatch an action to fetch that user
      this.props.dispatch(fetchUserProfile(match.params.userId));
    }
  }

  render() {
    const {
      match: { params },
      profile,
    } = this.props;
    console.log('this.params', params);
    const user = profile.user;

    if (profile.inProgress) {
      return <h1>Loading!</h1>;
    }
    return (
      <div className="settings">
        <div className="img-container">
          <img
            alt="user-dp"
            src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
          />
        </div>
        <div className="field">
          <div className="field-label">Name</div>
          <div className="field-label">{user.name}</div>
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="btn-grp">
          <button className="button save-btn">Add Friend</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profile }) {
  return {
    profile,
  };
}

export default connect(mapStateToProps)(UserProfile);
