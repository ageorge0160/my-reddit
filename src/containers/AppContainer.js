import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Root from '../containers/Root';


const AppContainer = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Root} />
      </div>
    </Router>
  );
};
export default AppContainer
