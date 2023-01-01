import React from 'react';

function Card({ header, desc, icon }) {
  return (
    <div class="bg-white px-7 py-5 rounded-xl flex flex-col gap-2 ">
      <img src={`./img/icons/${icon}.png`} alt={icon} class=" self-start" />
      <h1 class=" font-bold">{header}</h1>
      <p class=" opacity-50">{desc}</p>
    </div>
  );
}

export default Card;
