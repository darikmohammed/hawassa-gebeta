import React from 'react';

function AboutUs() {
  return (
    <section
      id="about-us"
      className="grid grid-cols-2 gap-20 px-40 items-center justify-items-center"
    >
      <div className=" mt-14 w-96 h-96 rounded-full bg-gradient-to-b from-white via-primary_light to-primary"></div>
      <div className=" mt-80 flex flex-col gap-8 items-end">
        <h1 className=" text-h6 font-bold">Who we are?</h1>
        <div className="flex gap-2 items-center">
          <h2 className=" text-h4 font-bold">A bit about us</h2>
          <div className="smile-img bg-primary_light rounded-full w-16 h-16 flex items-center justify-center">
            <img src="./img/smile.png" alt="Smile" className="" />
          </div>
        </div>
        <p className="text-end">
          Hawassa gebeta is a food blog & recomendation platform designed to
          help you find the perfect food & drink spots for every situation here
          in Hawaassa
        </p>
        <p className="text-end">
          Our goal is to provide you with the most genuine & reliable reviews of
          restaurants, hotels and cafe throughout Hawassa.
        </p>
        <button className="border-solid border-2 border-black rounded-lg py-3 px-5">
          Contact us
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
