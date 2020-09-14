import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createComment } from '../actions/posts';
import Comment from './Comment';
import { connect } from 'react-redux';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleAddComment = (e) => {
    const { comment } = this.state;
    const { post } = this.props;

    if (e.key === 'Enter') {
      this.props.dispatch(createComment(comment, post._id));

      //clear the comment
      this.setState({
        comment: '',
      });
    }
  };

  handleOnCommentChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };
  render() {
    const { post } = this.props;
    const { comment } = this.state;

    return (
      <div className="post-wrapper" key={post._id}>
        <div className="post-header">
          <div className="post-avatar">
            <Link to={`/user/${post.user._id}`}>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2922/2922506.svg"
                alt="user-pic"
              />
            </Link>
            <div>
              <span className="post-author">{post.user.name}</span>
              <span className="post-time">a minute ago</span>
            </div>
          </div>

          <div className="post-content">{post.content}</div>
          <div className="post-actions">
            <div className="post-like">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/686/686308.svg"
                alt="like icon"
              />
              <span>{post.likes.length}</span>
            </div>

            <div className="post-comments-icon">
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/907/907820.svg"
                alt="comment icon"
              />
              <span>{post.comments.length}</span>
            </div>
          </div>
          <div className="post-comment-box">
            <input
              placeholder="Start typing a comment"
              onChange={this.handleOnCommentChange}
              onKeyPress={this.handleAddComment}
              value={comment}
            />
          </div>

          <div className="post-comments-list">
            {post.comments.map((comment) => (
              <Comment comment={comment} key={comment._id} postId={post._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default connect()(Post);
