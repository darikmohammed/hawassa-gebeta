import React from 'react';

function Advertise() {
  return (
    <section className=" flex flex-col items-center bg-white px-8 md:px-40 py-8 md:py-16 text-center gap-3 md:gap-6 relative">
      <h1 className=" font-bold text-[24px] md:text-h2">
        <span className="ad-gradiant">Advertise</span> with us!
      </h1>
      <p className=" md:mx-[231px]">
        Advertise your Cafes and restaurants on our social media platforms and
        get a huge return on your business.
      </p>
      <button className=" bg-primary_light text-black rounded-lg py-3 px-5">
        Contact Us
      </button>
      {/* <img
        src="./img/arrow.png"
        alt="Point"
        className=" absolute w-[22.7px] h-[26.49px] bottom-[40px] right-[100px]  md:w-[80px] md:h-[94px] md:bottom-[60px] md:right-[519px]"
      /> */}
    </section>
  );
}

export default Advertise;
