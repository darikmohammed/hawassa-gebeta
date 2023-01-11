import React from 'react';
import DirectionDesc from './DirectionDesc';
import Map from './Map';
import data from '../data/data';

console.log(data.locations);

function FindUs() {
  return (
    <section className="bg-white flex flex-col md:px-40 items-center py-16 gap-8">
      <h1 className=" text-center text-[16px] font-bold md:text-[32px] ">
        Find restaurant near you in Hawassa
      </h1>
      <div className=" bg-black_light flex flex-col self-stretch items-center rounded-xl py-[32px] md:py-[64px] px-8">
        <Map />
        <div className=" my-[16px] md:mx-[32px] md:my-[32px] grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.locations.map((location) => (
            <DirectionDesc Name={location.name} Desc={location.disc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FindUs;
