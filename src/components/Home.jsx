import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className=" flex flex-col px-8 pb-8 bg-white md:grid md:grid-cols-2 md:gap-2 md:pt-16 md:px-40 md:pb-28"
    >
      <div className="flex flex-col gap-8 pt-8 md:pt-16">
        <h1 className=" text-[24px] md:text-h1 font-bold">
          Discovering the best food & drink spots in Hawassa.
        </h1>
        <p className=" text-black">
          Wondering where to get quality food and places to hangout in Hawassa?
          We got your back, We’ll guide you through some cool spots in the
          beautiful city of Hawassa.
        </p>
        <div className="flex gap-6 items-center self-start">
          <button className=" bg-primary_light text-black rounded-lg py-3 px-5">
            Contact Us
          </button>
          <button className="flex gap-1">
            <img src="./img/location.png" alt="location" />
            Discover Places
          </button>
        </div>
      </div>
      <div className="hidden md:block md:relative">
        <img
          src="./img/male_burger.png"
          alt="Male Character holding Burger"
          className="absolute top-0 right-1/2 translate-x-2/4"
        />
      </div>
    </section>
  );
}

export default Home;
