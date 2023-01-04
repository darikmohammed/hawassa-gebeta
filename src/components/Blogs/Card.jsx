import React from 'react';

function Card({ Image, Name, Food, Birr, Location }) {
  return (
    <div class=" flex-none snap-always snap-center bg-black_light p-4 rounded-lg flex flex-col justify-between gap-4">
      <img src={`./img/blogs/${Image}.png`} alt={Name} />
      <div>
        <h1 class=" font-bold text-xl">{Name}</h1>
        <ul class="list-disc px-6">
          <li>{Food}</li>
          <li>{Birr}</li>
          <li>{Location}</li>
        </ul>
      </div>
      <button class="rounded-lg border-solid border-2 border-primary_light py-3 px-5 font-semibold">
        Get Direction
      </button>
    </div>
  );
}

export default Card;
