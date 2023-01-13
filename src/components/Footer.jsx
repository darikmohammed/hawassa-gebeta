import React from 'react';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      <div className="flex flex-col gap-3 max-w-[349px]">
        <div className="flex items-center gap-3">
          <img
            src="./img/logo.png"
            alt="Logo"
            className=" w-[26.68px] h-[26px]"
          />
          <h1 className=" text-base md:text-h6 font-bold">Hawassa Gebeta</h1>
        </div>
        <p className=" block md:hidden before:">
          Let’s explore Hawassa Together!
        </p>
        <p className=" hidden md:block ">
          You can find Hotels, cafes and restaurants menu with detailed
          information's and reviews including personal recommendations on our
          socials. Let’s explore Hawassa Together!{' '}
        </p>
        <div className="hidden md:block">
          <SocialIcons />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between items-start flex-1 gap-8">
        <div className="flex flex-col gap-3">
          <h1 className=" font-bold text-[16px] md:text-[18px] md:font-normal">
            Contact
          </h1>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-3">
              <img
                src="./img/footer/phone.png"
                alt="Phone"
                className=" self-center"
              />
              +251 91 624 1399
            </li>
            <li className="flex gap-3">
              <img
                src="./img/footer/email.png"
                alt="Email"
                className=" self-center"
              />
              hawassagebeta@gamil.com
            </li>
            <li className="flex gap-3">
              <img
                src="./img/footer/location.png"
                alt="Location"
                className=" self-center"
              />
              Hawassa, Piassa street
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[16px] md:text-[18px] md:font-normal">
            Site Page
          </h1>
          <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[16px] md:text-[18px] md:font-normal">
            Services
          </h1>
          <ul className="flex flex-col gap-2">
            <li>Local SEO</li>
            <li>Digital marketing strategy</li>
            <li>Social media advertisement</li>
            <li>Social media management</li>
          </ul>
        </div>
        <div className="block md:hidden">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Footer;
