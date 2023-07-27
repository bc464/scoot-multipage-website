import React from 'react'

const HeroBannerAbout = () => {
  return (
    <div className='hero-banner__container'>
        <picture>
        <source media="(min-width: 800px)" 
        srcSet="./assets/images/about-hero-desktop.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./assets/images/about-hero-tablet.jpg" />      
        <img src='./assets/images/about-hero-mobile.jpg' alt="hero-banner-mobile" className="hero-banner-img"/>
      </picture>
      <div className='hero-banner__content'>
        <h1>About</h1>
        <div className='hb__content-img'>
        <img src='./assets/patterns/white-circles.svg' alt="semi circles" />
        </div>
      </div>
        
    </div>
  )
}

export default HeroBannerAbout