import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='font-bold text-4xl text-black text-center mt-24'>
        <p>
           <span className="text-red-600">Contact</span> Us
        </p>
    </div>
    <div className="mt-12 text-bold text-black text-2xl text-center">
        Plot No.9B, Knowledge Park 3 (Greater Noida)
        <br></br>
        Phone: + 91 - 9310464735
        <br></br>
        Email- homieshostel34@gmail.com
        <br></br>
        Google- www.homieshostel.in
    </div>
    <Footer/>
    </>
  )
}

export default Contact
