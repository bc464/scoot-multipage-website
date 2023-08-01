import React from 'react'
import "./LearnMoreEven.css"


const LearnMoreEven = ({heading, text, src}) => {
  return (
    <div className='learn-more__container'>
        <img src='./assets/patterns/circle.svg' alt='circle' className='circle-img-even'/>
        <div className='learn-more__content'>
            <div className='lm-even__content'>
                <h2>{heading}</h2>
                <p>{text}</p>
                <button className='btn'>Learn More</button>
            </div>
            <div className='lm-content__right'>
                <img className='lm-content__img' src={src} alt={heading} />
            </div>
        </div>
        <div className='learn-more__arrow'>
          <img src="./assets/patterns/left-downward-arrow.svg" alt="left down arrow" />
        </div>

    </div>
  )
}

export default LearnMoreEven