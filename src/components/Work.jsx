import React from 'react';

function Work() {
  return (
    <section class="bg-white flex flex-col px-40 items-center pt-16 pb-16 gap-8">
      <h1 className=" text-h6 font-bold">Working with</h1>
      <div class="flex items-center">
        <ul class="flex gap-8 relative grayscale opacity-30 items-center">
          <img src="./img/partnership/Ker-awud.png" alt="KER-AWUD Hotel" />
          <img src="./img/partnership/Negus.png" alt="Negus" />
          <img src="./img/partnership/Rori-Hotel.png" alt="Rori Hotel" />
          <img src="./img/partnership/Zanzibar.png" alt="Zanzibar" />
          <img src="./img/partnership/Light.png" alt="Dawit Light" />
          <img
            src="./img/partnership/Delivery-Hawassa.png"
            alt="Delivery Hawassa"
          />
        </ul>
      </div>
    </section>
  );
}

export default Work;
