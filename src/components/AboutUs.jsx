import React from 'react';

function AboutUs() {
  return (
    <section
      id="about-us"
      className="grid grid-cols-2 gap-20 px-40 pb-40 items-center justify-items-center"
    >
      {/* <div className="bg-white rounded-lg px-6 py-2 flex gap-2 items-center">
          <div className="flex mb-5 -space-x-4">
            <img src="./img/avatars/2.png" alt="2" className=" w-8 h-8" />
            <img src="./img/avatars/1.png" alt="1" className=" w-8 h-8" />
            <img src="./img/avatars/3.png" alt="3" className=" w-8 h-8" />
            <img src="./img/avatars/4.png" alt="4" className=" w-8 h-8" />
            <img src="./img/avatars/5.png" alt="5" className=" w-8 h-8" />
          </div>
          <div>
            <h1>73k+</h1>
            <hr />
            <p>Active audience on our social media platforms.</p>
          </div>
        </div> */}
      <div className=" mt-14 w-[37.5rem] h-[37.5rem] rounded-full bg-gradient-to-b from-black_light to-gradiant_stop relative">
        <img
          src="./img/Frame.png"
          alt="Customer Frame"
          className=" absolute bottom-20 left-1/2"
        />
      </div>
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
