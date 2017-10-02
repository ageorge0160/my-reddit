import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Reddit</h1>
      <NavLink
        to="/feed"
      >View Feed</NavLink>
    </div>
  );
};

export default Home;
