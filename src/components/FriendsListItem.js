import React from 'react';
const { Link } = require('react-router-dom');

function FriendsListItem(props) {
  return (
    <div>
      <Link classname="friends-item" to={`user/${props.friend._id}`}>
        <div className="friends-img">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/560/560216.svg"
            alt=""
          />
        </div>
        <div className="friends-name">{props.friend.email}</div>
      </Link>
    </div>
  );
}

export default FriendsListItem;
