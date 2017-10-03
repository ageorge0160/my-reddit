import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Reddit</h1>
      <Button bsStyle="success" bsSize="small" onClick={Home}>
        View Posts
      </Button>
    </div>
  );
};

export default Home;
