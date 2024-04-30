import React from 'react'
import play from "../assets/Img/Play icon.svg";
import { useNavigate } from "react-router-dom";

export default function Heading() {

    const navigate = useNavigate();

  return (
    <div className='Heading-Background'>
        <div className='Heading-container'>
            <div className='Heading-text'>
                <h2>Sickle Cell Awareness one story at a time</h2>
            </div>
            <div className='Heading-Play'>
                <button onClick={() => {navigate("/register");}} className='btn-Donate'>Donate Now</button>
                <div className='play-text'>
                    <img src={play} alt="" className="play-image" width="100%" />
                    <p>Play Video</p>
                </div>
            </div>
        </div>
    </div>
  )
}
