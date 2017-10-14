import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import App from '../containers/App';
import Header from './Header'
import Footer from './Footer'


const AppContainer = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={App} />
        <Footer />
      </div>
    </Router>
  );
};

export default AppContainer;
