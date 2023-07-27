import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AppSignUp from '../components/AppSignUp/AppSignUp'
import Footer from '../components/Footer/Footer'
import LearnMoreEven from '../components/LearnMoreEven/LearnMoreEven'
import LearnMoreOdd from '../components/LearnMoreOdd/LearnMoreOdd'
import HeroBannerAbout from '../components/HeroBannerAbout/HeroBannerAbout'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroBannerAbout />
      <LearnMoreEven heading={'Mobility for the digital era'} text={" Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."} src={"./assets/images/digital-era.jpg"}/>
      <LearnMoreOdd heading={"Better urban living"} text={"We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."} src={"./assets/images/better-living.jpg"} />

      <AppSignUp />
      <Footer />
      
    </div>
  )
}

export default About