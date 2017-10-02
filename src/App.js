import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Reddit</h1>
        </header>
        <p className="App-intro">
          <Home />
        </p>
      </div>
    );
  }
}

export default App;
