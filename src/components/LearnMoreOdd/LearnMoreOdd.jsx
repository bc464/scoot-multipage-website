import React from 'react'

import "./LearnMoreOdd.css"

const LearnMoreOdd = ({heading, text, src}) => {
  return (
    <div className='learn-more__container'>
        <img src='./assets/patterns/circle.svg' alt='circle' className='circle-img-odd'/>
        <div className='learn-more__content-odd'>
        <div className='lm-content__left'>
                <img className='lm-content__img' src={src} alt={heading} />
            </div>
        
            <div className='lm-even__content'>
                <h2>{heading}</h2>
                <p>{text}</p>
                <button className='btn'>Learn More</button>
            </div>
            
        </div>

    </div>
  )
}

export default LearnMoreOdd