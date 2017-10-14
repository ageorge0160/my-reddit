import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


export default class Posts extends Component {
   render() {
    return (
      <ul>
        {this.props.posts.map((post, index) => <li><NavLink to={`/posts/${index}`} key={index}>{post.title}</NavLink></li>)}
      </ul>
    )
  }
}

Posts.PropTypes = {
  posts: PropTypes.array.isRequired
}
