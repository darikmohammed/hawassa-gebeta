import React from 'react';
import Card from './Blogs/Card';
import data from '../data/data';

function Blogs() {
  return (
    <section className="flex bg-white flex-col items-center">
      <h1 class=" text-h4 font-bold">Blogs</h1>

      <div class="bg-white w-screen py-16 md:px-40 flex justify-center items-center">
        <ul class="w-full md:w-3/4 m-2 lg:w-1/2 flex justify-between items-start mb-8 space-x-3 overflow-x-scroll bg-white p-4 rounded flex-1">
          {data.blogs.map((blog) => (
            <li
              class="flex flex-none flex-col items-center space-y-1 bg-black_light p-4 rounded-lg gap-4"
              key={blog.id}
            >
              <Card
                Image={blog.Image}
                Name={blog.Name}
                Food={blog.Food}
                Birr={blog.Birr}
                Location={blog.Location}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Blogs;
