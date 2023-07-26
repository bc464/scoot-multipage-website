import React from 'react'
import "./LearnMoreEven.css"


const LearnMoreEven = () => {
  return (
    <div className='learn-more__container'>
        <img src='./assets/patterns/circle.svg' alt='circle' className='circle-img-even'/>
        <div className='learn-more__content'>
            <div className='lm-even__content'>
                <h2>Easy to use riding telemetry</h2>
                <p>The Scoot app is available with riding telemetry. This means it can show you your 
                average speed, how long you've been using the scooter, your traveling distance, 
                and many more things all in an easy to use app.</p>
                <button className='btn'>Learn More</button>
            </div>
            <div className='lm-content__right'>
                <img className='lm-content__img' src='./assets/images/telemetry.jpg' alt='telemetry img' />
            </div>
        </div>

    </div>
  )
}

export default LearnMoreEven