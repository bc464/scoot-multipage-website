import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <div className='map-container'> 
        <div className='map-content'>
        <picture>
        <source media="(min-width: 800px)" 
        srcSet="./assets/images/world-map-desktop.png" />
        <source media="(min-width: 749px)" 
        srcSet="./assets/images/world-map-tablet.png" />      
        <img src='./assets/images/world-map-mobile.png' alt="map-mobile" className="map-img"/>
      </picture>
      </div>
    </div>
  )
}

export default Map