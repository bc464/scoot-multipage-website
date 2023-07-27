import React from 'react'
import "./Map.css"

const Map = () => {
  return (
    <div className='map-container'>
      <div className='tooltip-container'>
        <div className='tooltip tooltip-ny'>
          <span className='tooltiptext'>New York</span>
        </div> 
        <div className='tooltip tooltip-london'>
          <span className='tooltiptext'>London</span>
        </div> 
        <div className=' tooltip tooltip-yoko'>
          <span className='tooltiptext'>Yokohama</span>
        </div> 
        <div className=' tooltip tooltip-jakarta'>
          <span className='tooltiptext'>Jakarta</span>
        </div> 
      </div>
      <div className='map-content'>
        <picture>
        <source media="(min-width: 800px)" 
        srcSet="./assets/images/world-map-desktop.png" />
        <source media="(min-width: 749px)" 
        srcSet="./assets/images/world-map-tablet.png" />      
        <img src='./assets/images/world-map-mobile.png' alt="map-mobile" className="map-img"/>
      </picture>
      </div>
      <div className='placename-container'>
        <div className='placename-box'>New York</div>
        <div className='placename-box'>London</div>
        <div className='placename-box'>Jakarta</div>
        <div className='placename-box'>Yokohama</div>
      </div>
    </div>
  )
}

export default Map