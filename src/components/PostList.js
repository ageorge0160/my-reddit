import React, {PropTypes} from 'react';

const PostList = ({posts}) => {
  return (
    <ul>
      {posts.map(post =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList;
