import React from 'react';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col gap-3">
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
        <SocialIcons />
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
