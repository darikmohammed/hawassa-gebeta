import React from 'react';
import Map from './Map';

function FindUs() {
  return (
    <section className="bg-white flex flex-col md:px-40 items-center py-16 gap-8">
      <h1 className=" text-center text-[16px] font-bold md:text-[32px] ">
        Find restaurant near you in Hawassa
      </h1>
      <div className=" bg-black_light flex flex-col self-stretch items-center rounded-xl py-[32px] md:py-[64px] px-8">
        <Map />
        <div></div>
      </div>
    </section>
  );
}

export default FindUs;
