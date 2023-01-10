import React from 'react';
import Card from './Blogs/Card';
import data from '../data/data';

function Blogs() {
  return (
    <section class=" bg-white flex flex-col items-center py-16 px-40 gap-8">
      <h1 class=" text-h4 font-bold">Blogs</h1>
      <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap mx-8 md:mx-40">
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
      </div>
    </section>
  );
}

export default Blogs;
