import React from "react";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";
import p7 from "../assets/p7.png";
import p8 from "../assets/p8.png";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.png";
import p11 from "../assets/p11.png";

import room1 from "../assets/room1.png";
import room2 from "../assets/room2.png";
import room3 from "../assets/room3.png";
import room4 from "../assets/room4.png";


const galleryImages = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, room1, room2, room3, room4
];

const Gallery = () => {
  return (
    <div className="mt-24 px-4 md:px-16 flex flex-col items-center">
      
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-12">
        Our <span className="text-red-600">Gallery</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full justify-center">

        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;