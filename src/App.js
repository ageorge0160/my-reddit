import React, { Component } from 'react';
import NavBar from '../src/components/NavBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Feed from './components/Feed';
import Details from './components/Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Reddit</h1>
        </header>
        <body>
          <NavBar />
          <Provider store={store}>
          <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/feed" component={Feed} />
          <Route path="/(:filter)" component={Details} />
          </Router>
          </Provider>
        </body>
      </div>
    );
  }
}

export default App;
