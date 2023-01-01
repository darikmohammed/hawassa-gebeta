import React from 'react';

function Blogs() {
  return (
    <section className="bg-white py-16 px-40 flex flex-col items-center">
      <h1 className=" text-h4 font-bold">Blogs</h1>
      <div className="flex overflow-x-scroll px-2 hide-scroll-bar">
        <Blogs />
      </div>
    </section>
  );
}

export default Blogs;
