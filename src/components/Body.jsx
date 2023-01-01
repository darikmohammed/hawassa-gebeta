import React from 'react';
import AboutUs from './AboutUs';
import Home from './Home';
import Work from './Work';

function Body() {
  return (
    <div className=" h-full bg-body">
      <Home />
      <AboutUs />
      <Work />
      <h1 className=" h-96">Body</h1>
    </div>
  );
}

export default Body;
