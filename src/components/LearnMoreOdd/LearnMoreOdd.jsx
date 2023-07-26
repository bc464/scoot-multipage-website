import React from 'react'

import "./LearnMoreOdd.css"

const LearnMoreOdd = () => {
  return (
    <div className='learn-more__container'>
        <img src='./assets/patterns/circle.svg' alt='circle' className='circle-img-odd'/>
        <div className='learn-more__content'>
        <div className='lm-content__left'>
                <img className='lm-content__img' src='./assets/images/near-you.jpg' alt='near you img' />
            </div>
        
            <div className='lm-even__content'>
                <h2>Coming to a city near you</h2>
                <p>Scoot is available in 4 major cities so far. We’re expanding rapidly, so be sure 
                to let us know if you want to see us in your hometown. We’re aiming to let our 
                scooters loose on 23 cities over the coming year.</p>
                <button className='btn'>Learn More</button>
            </div>
            
        </div>

    </div>
  )
}

export default LearnMoreOdd