import React from "react";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import Navbar from "./Navbar";


const cardsData = [
  { id: 1, title: "Hygienic Meals", desc: "Nutritious & hygienic food prepared daily", image: img1 },
  { id: 2, title: "High-Speed WiFi", desc: "Seamless internet for study & entertainment", image: img2 },
  { id: 3, title: "Power Backup", desc: "24/7 uninterrupted electricity supply", image: img3 },
  { id: 4, title: "24x7 Security", desc: "CCTV surveillance & secure premises", image: img4 },
  { id: 5, title: "Ac and Non-Ac Rooms", desc:"All types of rooms available", image: img5 },
  { id: 6, title: "Housekeeping", desc: "Daily cleaning & maintenance services", image: img6 },
  { id: 7, title: "Indoor Games", desc: "Fun activities like pool, carrom & more", image: img7 },
  { id: 8, title: "Gymnasium", desc: "Stay fit with fully equipped gym", image: img8 },
  { id: 9, title: "Cab Facility", desc: "Easy transport for pick & drop anytime", image: img9 },
  { id: 10, title: "Doctor on Call", desc: "Medical support available when needed", image: img10 }
];

function Facilities() {
  return (
    <>
    <Navbar/>
    <div className="mt-20 px-4 md:px-16">

      <div className="flex justify-center">
        <div className="rounded-2xl p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="bg-white rounded-2xl px-6 py-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              Premium <span className="text-red-600">Hostel Amenities</span>
            </h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Everything you need for a comfortable, safe and productive student life
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {cardsData.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-[3px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400
                       shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="bg-blue-50 rounded-full p-5 mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
              </div>

              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  
    </>
  );
}

export default Facilities;