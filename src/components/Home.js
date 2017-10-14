import React from 'react';

const Home = () => {
  return (
    <div>
      <h4>Thank you for visiting. As a previous park ranger and current outdoor enthusiast I try too keep up with the current outdoor news. Enjoy the collection of outdoor subreddits! </h4>
      <div className='button_div'>
      <form action='posts'>
      <button className='btn btn-success' onClick="location.href='posts'">
        View Posts
      </button>
      </form>
      </div>
    </div>
  );
};

export default Home;
