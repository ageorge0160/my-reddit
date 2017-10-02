import React, { Component } from 'react';
import NavBar from '../src/components/NavBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
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
          <div>
            <Router>
                <div>
                  <NavBar />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/feed" component={Feed} />
                  <Route exact path="/details" component={Details} />
                </div>
            </Router>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
