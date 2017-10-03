import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Root from '../containers/Root';
import Show from '../components/Show';


const AppContainer = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Root} />
        <Route exact path="/show" component={Show} />
      </div>
    </Router>
  );
};
export default AppContainer
