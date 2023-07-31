import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import AppSignUp from '../components/AppSignUp/AppSignUp'
import Footer from '../components/Footer/Footer'
import LearnMoreEven from '../components/LearnMoreEven/LearnMoreEven'
import LearnMoreOdd from '../components/LearnMoreOdd/LearnMoreOdd'
import HeroBannerAbout from '../components/HeroBannerAbout/HeroBannerAbout'
import Values from '../components/Values/Values'
import Accordion from '../components/Accordion/Accordion'

const faqs_how = [
  {
      title: "How do I download the app?",
      text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
  },
  {
      title: "Can I find a nearby Scoots?",
      text: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. "
  },
  {
      title: "Do I need a license to ride?",
      text: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
  },
]
const faqs_safe = [
  {
      title: "Should I wear a helmet?",
      text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
  },
  {
      title: "How about the rules & regulations?",
      text: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
  },
  {
      title: "What if I damage my Scoot?",
      text: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
  },
  ];


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroBannerAbout />
      <LearnMoreEven heading={'Mobility for the digital era'} text={" Getting around should be simple (and even fun!) for everyone. We embrace technology to provide low cost, smart access to scooters at your fingertips."} src={"./assets/images/digital-era.jpg"}/>
      <LearnMoreOdd heading={"Better urban living"} text={"We’re helping connect cities and bring people closer together. Our scooters are also fully-electric and we offset the minimal carbon footprint for each ride."} src={"./assets/images/better-living.jpg"} />
      <Values heading="Our Values" />
      <Accordion data={faqs_how} data2={faqs_safe}/>
      <AppSignUp />
      <Footer />
      
    </div>
  )
}

export default About