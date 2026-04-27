import React from 'react'

const Badges = () => {
  return (
    <div className="mt-16 px-4 md:px-20 flex flex-col items-center">
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        Our <span className="text-red-600">Achievements</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full justify-center">

        {/* Card 1 */}
        <div className="rounded-xl p-[2px] bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-500 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="font-bold text-3xl text-blue-600">500+</span>
            <p className="text-gray-500 mt-2 text-center font-semibold">Happy Students</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl p-[2px] bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="font-bold text-3xl text-cyan-500">30+</span>
            <p className="text-gray-500 mt-2 text-center font-semibold">Hostel Amenities</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl p-[2px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="font-bold text-3xl text-purple-500">300+</span>
            <p className="text-gray-500 mt-2 text-center font-semibold">Total Beds</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl p-[2px] bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 hover:scale-105 transition-transform duration-300 shadow-lg">
          <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center">
            <span className="font-bold text-3xl text-red-500">10+</span>
            <p className="text-gray-500 mt-2 text-center font-semibold">Cab Available</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Badges