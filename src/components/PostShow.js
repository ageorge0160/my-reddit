import React from 'react';

const PostShow = ({ post }) =>
  <div>
    <h1>Post Show Page</h1>
    <h1>{post.title}</h1>
    <p>{post.content}</p>
  </div>;

export default PostShow;
