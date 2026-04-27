import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

const slides = [
  { image: image1, title: "Welcome", desc: "Start your journey with us" },
  { image: image2, title: "Feel at Home", desc: "Modern shared living spaces designed for comfort and convenience" },
  { image: image3, title: "Zero Brokerage", desc: "Hassle-free booking with complete transparency" },
  { image: image4, title: "Create & Grow", desc: "An environment that helps you focus and build your future" },
  { image: image5, title: "Your Choice", desc: "Private or shared rooms tailored to your lifestyle" },
  { image: image6, title: "Achieve More", desc: "Stay motivated and reach your goals with ease" },
];

const CustomImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 mx-4 md:mx-20 flex flex-col md:flex-row items-center gap-12">

      <div className="w-full md:w-1/2 overflow-hidden mt-6 md:mt-0">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-[260px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover rounded-xl"
              />

              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

              <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white max-w-xs">
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base mb-4">
                  {slide.desc}
                </p>

                <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="font-bold text-3xl md:text-5xl text-gray-800 leading-tight">
          Discover Your Perfect <span className="text-red-600">Student Living</span>
        </h1>

        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Our residences are thoughtfully designed to give you a comfortable, secure, 
          and vibrant lifestyle. Whether you're studying, relaxing, or socializing, 
          you'll always feel right at home.
        </p>

        <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
          Get Started
        </button>
      </div>

    </div>
  );
};

export default CustomImages;