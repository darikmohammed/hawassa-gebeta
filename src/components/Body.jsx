import React from 'react';
import AboutUs from './AboutUs';
import Blogs from './Blogs';
import FindUs from './FindUs';
import Home from './Home';
import Service from './Service';
import Work from './Work';

function Body() {
  return (
    <div className=" h-full bg-body">
      <Home />
      <AboutUs />
      <Work />
      <Service />
      {/* <Blogs /> */}
      <FindUs />
    </div>
  );
}

export default Body;
