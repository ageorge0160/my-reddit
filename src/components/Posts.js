import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import PostList from './PostList';

class Posts extends Component {
   render() {
    return (
      <div>
        <h1>Posts</h1>
          <div>
            <PostList posts={this.props.posts} />
          </div>
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Posts);
