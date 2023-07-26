import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero-container'>
        <picture>
        <source media="(min-width: 800px)" 
        srcSet="./assets/images/home-hero-desktop.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./assets/images/home-hero-tablet.jpg" />      
        <img src='./assets/images/home-hero-mobile.jpg' alt="hero-mobile" className="hero-img"/>
      </picture>
      <div className='hero-content'>
        <h1>Scooter sharing made simple</h1>
        <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient 
  locations in each of our cities. Use our app to locate the nearest bike, unlock 
  it with a tap, and you’re away!</p>
    <button className='btn'>Get Scootin</button>
      </div>
    </div>
  )
}

export default Hero