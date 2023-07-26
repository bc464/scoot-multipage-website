import React from 'react'
import "./NotListedCity.css"

const NotListedCity = () => {
  return (
    <div className='not-city__container'>
        <div className='not-city__content'>
            <h2>Your city not listed?</h2>
            <p> If you’d like to see Scoot in your hometown, be sure to let us know. We track 
            requests and plan launches based on demand. Feel free to message us by clicking 
            the link or messaging us on social.</p>
            <button className='btn'>Message Us</button>
        </div>
    </div>
  )
}

export default NotListedCity