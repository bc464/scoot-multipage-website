import React from 'react'
import "./Values.css"

const Values = ({heading}) => {
  return (
    <div className='values-container'>
        <h2>{heading}</h2>
        <div className='values-content'>
            <div className='values-box'>
                <div className='values-circle'>
                    <img src="./assets/images/our-tech.jpg" alt="our tech" />
                </div>
                <div className='value-box__content'>
                    <div className='vb-content__circle'>01</div>
                    <h4>Our tech</h4>
                    <p>We’re using cutting edge technology to drive accessible urban transportation forward. 
                    Our fully electric scooters are a joy to ride!</p>
                </div>
            </div>
            <div className='values-box'>
                <div className='values-circle'>
                    <img src="./assets/images/our-integrity.jpg" alt="our integrity" />
                </div>
                <div className='value-box__content'>
                    <div className='vb-content__circle'>02</div>
                    <h4>Our integrity</h4>
                    <p>We are fully committed to deliver a great yet safe, sustainable micro-mobility experience 
                    in every city we serve.</p>
                </div>
            </div>
            <div className='values-box'>
                <div className='values-circle'>
                    <img src="./assets/images/our-community.jpg" alt="our community" />
                </div>
                <div className='value-box__content'>
                    <div className='vb-content__circle'>03</div>
                    <h4>Our community</h4>
                    <p>We support every community we serve. All workers are paid a living wage based on their 
                    location and are Scoot employees.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Values