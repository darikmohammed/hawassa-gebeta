import React from 'react';
import AboutUs from './AboutUs';
import Advertise from './Advertise';
import Blogs from './Blogs';
import FindUs from './FindUs';
import Home from './Home';
import Service from './Service';
import Work from './Work';

function Body() {
  return (
    <div className=" bg-body">
      <Home />
      <AboutUs />
      <Work />
      <Service />
      {/* <Blogs /> */}
      <FindUs />
      <Advertise />
    </div>
  );
}

export default Body;
