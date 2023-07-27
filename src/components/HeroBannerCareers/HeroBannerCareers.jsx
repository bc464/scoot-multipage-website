import React from 'react'
import "./HeroBannerCareers.css"


const HeroBannerCareers = ({heading}) => {
  return (
    <div className='hero-banner__container'>
        <picture>
        <source media="(min-width: 800px)" 
        srcSet="./assets/images/careers-locations-hero-desktop.jpg" />
        <source media="(min-width: 749px)" 
        srcSet="./assets/images/careers-locations-hero-tablet.jpg" />      
        <img src='./assets/images/careers-location-hero-mobile.jpg' alt="hero-banner-mobile" className="hero-banner-img"/>
      </picture>
      <div className='hero-banner__content'>
        <h1>{heading}</h1>
        <div className='hb__content-img'>
        <img src='./assets/patterns/white-circles.svg' alt="semi circles" />
        </div>
      </div>
        
    </div>
  )
}

export default HeroBannerCareers