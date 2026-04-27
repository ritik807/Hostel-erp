import React from "react";

import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";
import room4 from "../assets/room4.png";
import Navbar from "./Navbar";


const roomsData = [
  { id: 1, title: "Single Sharing", image: room1 },
  { id: 2, title: "Double Sharing", image: room2 },
  { id: 3, title: "Triple Sharing", image: room3 },
  { id: 4, title: "Four Sharing Room", image: room4 },
];

const Rooms = () => {
  return (
    <>
    <Navbar/>
    <div className="mt-20 px-4 md:px-16 flex flex-col items-center">

      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-10">
        Explore Our <span className="text-red-600">Rooms</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">

        {roomsData.map((room) => (
          <div
            key={room.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={room.image}
              alt={room.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-lg md:text-xl font-semibold drop-shadow-lg">
                {room.title}
              </h2>
            </div>
          </div>
        ))}

      </div>

    </div>
  
    </>
  );
};

export default Rooms;