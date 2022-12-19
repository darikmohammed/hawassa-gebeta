import React from 'react';
import AboutUs from './AboutUs';
import Home from './Home';

function Body() {
  return (
    <div className=" h-full bg-body">
      <Home />
      <AboutUs />
      <h1 className=" h-96">Body</h1>
    </div>
  );
}

export default Body;
