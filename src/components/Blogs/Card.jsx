import React from 'react';
import data from '../../data/data';
console.log(data.blogs);
function Card() {
  return data.blogs.map((blog) => (
    <div class=" flex-none snap-always snap-center bg-black_light p-4 rounded-lg flex flex-col gap-4">
      <img src="./img/blogs/Majet.png" alt="Majet" />
      <div>
        <h1 class=" font-bold text-xl">Majet Restaurant</h1>
        <ul class="list-disc px-6">
          <li>Majest Special Combo</li>
          <li>300ETB (including Vat)</li>
          <li>On the way from Atote to Welde Amanuel </li>
        </ul>
      </div>
      <button class="rounded-lg border-solid border-2 border-primary_light py-3 px-5 font-semibold">
        Get Direction
      </button>
    </div>
  ));
}

export default Card;
