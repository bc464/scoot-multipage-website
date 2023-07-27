import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AppSignUp from '../components/AppSignUp/AppSignUp'
import Footer from '../components/Footer/Footer'
import Map from '../components/Map/Map'
import NotListedCity from '../components/NotListedCity/NotLIstedCity'
import HeroBannerLocation from '../components/HeroBannerLocation/HeroBannerLocation'


const Locations = () => {
  return (
    <div>
      <Navbar />
      <HeroBannerLocation />
      <Map />
      <NotListedCity />
      <AppSignUp />
      <Footer />
    </div>
  )
}

export default Locations