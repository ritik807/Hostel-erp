import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Badges from '../components/Badges'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Facilities from '../components/Facilities'
import Rooms from '../components/Rooms'
const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Badges/>
      <Facilities/>
      <Rooms/>
      <Gallery/>
      <Footer/>
    </>
  )
}

export default Home
