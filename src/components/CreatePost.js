import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/posts';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleOnClick = () => {
    //dispatch action
    this.props.dispatch(createPost(this.state.content));
    this.setState({
      content: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <div>
          <button id="add-post-btn" onClick={this.handleOnClick}>
            Add Post
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts,
  };
}

export default connect(mapStateToProps)(CreatePost);

// if we dont pass the mapStateToProps function then we will only get dispatch as props
//example, export default connect()(createPost)
