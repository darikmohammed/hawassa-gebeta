import React from 'react';

function Nav() {
  return (
    <nav className=" px-4 py-8 flex justify-between items-center shadow-lg shadow-slate-400/10 bg-white md:px-40">
      <div className="logo flex items-center gap-3">
        <img
          src="./img/logo.png"
          alt="Logo"
          className=" w-[26.68px] h-[26px]"
        />
        <h1 className=" text-base md:text-h6 font-bold">Hawassa Gebeta</h1>
      </div>
      <div className=" block md:hidden">
        <img src="./img/Menu.png" alt="hamburger" />
      </div>
      <ul className="hidden md:flex gap-10">
        <li>Home</li>
        <li>About us</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <button className="hidden md:block border-solid border-2 border-black rounded-lg py-3 px-5">
        Contact us
      </button>
    </nav>
  );
}

export default Nav;
