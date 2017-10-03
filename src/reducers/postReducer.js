import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer(state = initialState.posts, action) {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:  
      return action.posts
    default:
      return state;
  }
}
