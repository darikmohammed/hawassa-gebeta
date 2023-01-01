import React from 'react';
import Card from './Blogs/Card';

function Blogs() {
  return (
    <section class=" bg-white flex flex-col items-center py-16 px-40 gap-8">
      <h1 class=" text-h4 font-bold">Blogs</h1>
      <div class="flex flex-nowrap px-2 overflow-x-auto no-scrollbar gap-4 snap-x snap-mandatory">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Blogs;
