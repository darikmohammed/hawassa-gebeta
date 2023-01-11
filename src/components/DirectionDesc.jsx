import React from 'react';

function DirectionDesc({ Name, Desc }) {
  return (
    <div className=" bg-white p-8 rounded-2xl">
      <h1 className=" font-bold text-[15.9216px]">{Name}</h1>
      <ul className=" list-disc pl-8">
        {Desc.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default DirectionDesc;
