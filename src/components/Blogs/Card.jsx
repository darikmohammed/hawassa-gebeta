import React from 'react';

function Card() {
  return (
    <div className=" bg-black_light p-4 rounded-lg flex flex-col gap-4">
      <img src="./img/blogs/Majet.png" alt="Majet" />
      <div>
        <h1>Majet Restaurant</h1>
        <ul>
          <li>Majest Special Combo</li>
          <li>300ETB (including Vat)</li>
          <li>On the way from Atote to Welde Amanuel </li>
        </ul>
      </div>
      <button>Get Direction</button>
    </div>
  );
}

export default Card;
