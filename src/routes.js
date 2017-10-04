import React from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Root from './containers/Root';
import Posts from './components/Posts'
import Post from './components/Post';

const Routes = () => {
  return (
      <div>
        <NavBar />
        <Route exact path="/" component={Home} >
          <Route path="/posts" component={Posts} >
            <Route exact path="/posts/:id" component={Post} />
          </Route>
        </Route>
      </div>
  );
};
export default Routes
