import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import AppSignUp from '../components/AppSignUp/AppSignUp'
import Footer from '../components/Footer/Footer'
import ProcessBreakdown from '../components/ProcessBreakdown/ProcessBreakdown'
import LearnMoreEven from '../components/LearnMoreEven/LearnMoreEven'
import LearnMoreOdd from '../components/LearnMoreOdd/LearnMoreOdd'




const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <ProcessBreakdown />
        <LearnMoreEven />
        <LearnMoreOdd />
        <LearnMoreEven />


        <AppSignUp />
        <Footer />
        
        
    </div>
  )
}

export default Home

