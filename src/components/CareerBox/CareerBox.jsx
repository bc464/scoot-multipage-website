import React from 'react'
import "./CareerBox.css"

const CareerBox = ({heading, text}) => {
  return (
    <div className='careerbox-container'>
        <div className='careerbox-content'>
            <div className='careerbox-textContent'>
                <h4>{heading}</h4>
                <p>{text}</p>
            </div>
            <button className='btn'>Apply</button>
        </div>
    </div>
  )
}

export default CareerBox