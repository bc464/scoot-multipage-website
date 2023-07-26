import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AppSignUp from '../components/AppSignUp/AppSignUp'
import Footer from '../components/Footer/Footer'
import LearnMoreEven from '../components/LearnMoreEven/LearnMoreEven'
import LearnMoreOdd from '../components/LearnMoreOdd/LearnMoreOdd'

const About = () => {
  return (
    <div>
      <Navbar />
      <LearnMoreEven />
      <LearnMoreOdd />

      <AppSignUp />
      <Footer />
      
    </div>
  )
}

export default About