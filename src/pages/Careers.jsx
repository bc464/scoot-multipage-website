import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AppSignUp from '../components/AppSignUp/AppSignUp'
import Footer from '../components/Footer/Footer'
import LearnMoreEven from '../components/LearnMoreEven/LearnMoreEven'
import CareerBox from '../components/CareerBox/CareerBox'
import HeroBannerCareers from '../components/HeroBannerCareers/HeroBannerCareers'

const Careers = () => {
  return (
    <div>
      <Navbar />
      <HeroBannerCareers heading={"Careers"}/>
      <LearnMoreEven heading={"Care to join our mission?"} text={"We’re always looking for ambitious individuals to help us on our journey. If you’re passionate about our mission to provide clean, accessible transport to improve urban living we want to hear from you!"} src={"./assets/images/join-us.jpg"} />

      <CareerBox heading={"General Manager"} text={"Jakarta, Indonesia"}/>
      <CareerBox heading={"UI/UX Designer"} text={"Yokohama, Japan"}/>
      <CareerBox heading={"Blog Content Copywriter"} text={"New York, United States"}/>
      <CareerBox heading={"Graphic Designer"} text={"New York, United States"}/>
      <CareerBox heading={"Fleet Supervisor"} text={"Jakarta, Indonesia"}/>
      <CareerBox heading={"UX Analyst"} text={"London, United Kingsdom"}/>
      <AppSignUp />
      <Footer />
      </div>
  )
}

export default Careers