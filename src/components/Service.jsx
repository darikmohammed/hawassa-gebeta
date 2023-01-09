import React from 'react';
import Card from './Service/Card';

function Service() {
  return (
    <section class="flex items-stretch md:px-40 bg-white">
      <div class=" w-full grid grid-cols-1 md:grid-cols-2 bg-black_light my-20 md:gap-24 px-8 md:px-16 rounded-xl">
        <div class="flex flex-col gap-4 py-10">
          <h1 class=" opacity-50">Service</h1>
          <h2 class=" text-[24px] md:text-h3 font-bold">
            What we do for our customers
          </h2>
          <p class=" text-justify">
            Besides guiding you to explore and discover the beautiful city of
            Hawassa, We also give different services for hotels, restaurants,
            cafes & other businesses helping them reach customers online through
            digital marketing services and guide companies to reach and convert
            their target audience Via search, socials and more.
          </p>
          <div class=" hidden md:flex items-center gap-8 ">
            <button className=" bg-primary_light text-black rounded-lg py-3 px-5">
              Contact Us
            </button>
            <button className="flex gap-1">
              <img src="./img/location.png" alt="location" />
              Discover Places
            </button>
          </div>
        </div>
        <div class=" flex flex-col-reverse items-center  gap-4 md:grid md:grid-cols-2 md:items-center md:gap-10">
          <Card
            icon="Share"
            header="Social Media Management"
            desc="Managing your online presence on social media platforms."
          />
          <div class="flex flex-row-reverse gap-4 md:flex-col md:gap-10">
            <Card
              icon="Search"
              header="Local SEO"
              desc="Boost your local SEO effort & link your brand with high intent customers."
            />
            <Card
              icon="View"
              header="Digital Advertisenment"
              desc="Runnig digital ads to get discovered by peoples & potential customers."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
