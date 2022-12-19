import React from 'react';

function Nav() {
  return (
    <nav className="px-40 py-8 flex justify-between items-center shadow-lg shadow-slate-400/50 bg-white">
      <div className="logo flex items-center gap-3">
        <img src="./img/logo.png" alt="Logo" />
        <h1 className=" text-h6 font-bold">Hawassa Gebeta</h1>
      </div>
      <ul className="flex gap-10">
        <li>Home</li>
        <li>About us</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>
      <button className="border-solid border-2 border-black rounded-md py-3 px-5">
        Contact us
      </button>
    </nav>
  );
}

export default Nav;
