import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
    <header className="App-header">
      <h1 className="App-title">WELCOME TO MY REDDIT</h1>
    </header>
      <Button bsStyle="success" bsSize="small" onClick={Home}>
        View Posts
      </Button>
    </div>
  );
};

export default Home;
