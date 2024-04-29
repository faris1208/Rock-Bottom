import React from 'react'
import play from "../assets/Img/Play icon.svg";

export default function Heading() {
  return (
    <div className='Heading-Background'>
        <div className='Heading-container'>
            <div className='Heading-text'>
                <h2>Inclusive care for children with special needs</h2>
            </div>
            <div className='Heading-Play'>
                <button className='btn-Donate'>Donate Now</button>
                <div className='play-text'>
                    <img src={play} alt="" className="play-image" width="100%" />
                    <p>Play Video</p>
                </div>
            </div>
        </div>
    </div>
  )
}
