import React from 'react';

function AboutUs() {
  return (
    <section
      id="about-us"
      className=" flex flex-col px-8 pt-8 pb-10 md:grid md:grid-cols-2 md:gap-20 md:px-40 md:pb-40 md:items-center md:justify-items-center"
    >
      <img
        src="./img/Frame.png"
        alt="Customer Frame"
        className="block md:hidden"
      />
      <div className=" hidden md:block mt-14 w-[37.5rem] h-[37.5rem] rounded-full bg-gradient-to-b from-black_light to-gradiant_stop relative">
        <img
          src="./img/Frame.png"
          alt="Customer Frame"
          className=" absolute bottom-20 left-1/2"
        />
      </div>
      <div className=" flex flex-col mt-8 items-center gap-8 md:items-end md:mt-80">
        <h1 className=" text-h6 font-bold opacity-50">Who we are?</h1>
        <div className="flex gap-2 items-center">
          <h2 className=" text-h4 font-bold">A bit about us</h2>
          <div className=" hidden md:flex smile-img bg-primary_light rounded-full w-16 h-16 items-center justify-center">
            <img src="./img/smile.png" alt="Smile" className="" />
          </div>
        </div>
        <p className=" text-center md:text-end">
          Hawassa gebeta is a food blog & recomendation platform designed to
          help you find the perfect food & drink spots for every situation here
          in Hawaassa
        </p>
        <p className=" text-center md:text-end">
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
