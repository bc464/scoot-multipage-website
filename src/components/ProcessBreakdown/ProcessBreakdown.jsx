import React from 'react'
import "./ProcessBreakdown.css"

const ProcessBreakdown = () => {
  return (
    
    <div className='breakdown-container'>
        <div className='breakdown-content'>
            <div className='breakdown-box'>
                <img src='./assets/icons/locate.svg' alt="locate-icon" />
                <div className='breakdown-box__content'>
                    <h4>Locate with app</h4>
                    <p>Use the app to find the nearest scooter to you. We are continuously placing scooters 
                    in the areas with most demand, so one should never be too far away. </p>
                </div>
            </div>
            <div className='breakdown-box'>
                <img src='./assets/icons/scooter.svg' alt="scooter-icon" />
                <div className='breakdown-box__content'>
                    <h4>Pick your scooter</h4>
                    <p>We show the most important info for the scooters closest to you. So you know how much 
                    charge they have left and can see roughly how much it will cost. </p>
                </div>
            </div>
            <div className='breakdown-box'>
                <img src='./assets/icons/ride.svg' alt="ride-icon" />
                <div className='breakdown-box__content'>
                    <h4>Enjoy the ride</h4>
                    <p>Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, 
                    and you’re off! Always lock bikes away from walkways and accessibility ramps. </p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ProcessBreakdown