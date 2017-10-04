
import React from 'react';

const Home = () => {
  return (
    <div>
    <header className="App-header">
      <h1 className="App-title">WELCOME TO MY REDDIT</h1>
    </header>
    <div className='button_div'>
      <form action='posts'>
      <button className='button' onclick="location.href='posts.html'">
        View Posts
      </button>
      </form>
      </div>
    </div>
  );
};

export default Home;
