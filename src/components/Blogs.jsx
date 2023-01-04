import React from 'react';
import Card from './Blogs/Card';
import data from '../data/data';

function Blogs() {
  return (
    <section class=" bg-white flex flex-col items-center py-16 px-40 gap-8">
      <h1 class=" text-h4 font-bold">Blogs</h1>
      <div class="flex flex-nowrap px-2 overflow-x-auto no-scrollbar gap-4 snap-x snap-mandatory">
        {data.blogs.map((blog) => (
          <Card
            Image={blog.Image}
            Name={blog.Name}
            Food={blog.Food}
            Birr={blog.Birr}
            Location={blog.Location}
          />
        ))}
      </div>
    </section>
  );
}

export default Blogs;
