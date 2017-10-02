import React from 'react';
import PropTypes from 'prop-types';

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, index) => <li key={index}>{post.title}</li>)}
      </ul>
    )
  }
}

Posts.PropTypes = {
  posts: PropTypes.array.isRequired
}
