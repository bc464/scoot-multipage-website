import React from 'react'
import "./AppSignUp.css"
const AppSignUp = () => {
  return (
    <div className='appSignUp-container'>
      <img className='semi-circles' src="./assets/patterns/semi-circles.svg" alt='semi-circles' />
        <div className='appSignUp-content'>
          <div><h2>Sign up and</h2> 
            <h2>Scoot off today</h2>
          </div>
          <div className='appSignUp-icons'>
              <img src='./assets/icons/app-store.svg' alt='app-store-icon'>
              </img>
              <img src='./assets/icons/google-play.svg' alt='google-play-icon' />
          </div>
        </div>
    </div>
  )
}

export default AppSignUp