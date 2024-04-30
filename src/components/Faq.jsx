import React from 'react'
import line from "../assets/Img/Line.svg";
import people from "../assets/Img/Video.svg";
import { useNavigate } from "react-router-dom";

export default function Faq() {

    const navigate = useNavigate();

  return (
    <div>
        <div className='Faq'>
            <div className='Faq-text-one'>
                <div className='line-faq'>
                    <img src={line} alt="" className="line-image" width="100%" />
                    <h4>Who we are</h4>
                </div>
                <h2>We are a non-governmental organization</h2>
            </div>
            <div className='Faq-text-two'>
                <h2>Why Rock Bottom Sickle Cell Initiative</h2>
                <h6>OUR MISSION:</h6>
                <p>Empower, Support, Educate</p>
                <h6>VISION STATEMENT:</h6>
                <p>A world where every sickle cell warrior thrives</p>
            </div>
        </div>

        

        <div className='Faq-two'>
            <div className='Faq-two-text'>
                <h2>Empowerment</h2>
                <p>We empower warriors by sharing knowledge, sharing stories, listening to stories, providing resources, embracing positivity and opportunities for personal and professional growth all by building a network/community.</p>
                <button onClick={() => {navigate("/register");}} className='Learn-btn'>Learn More</button>
            </div>
            <div className='people-video'>
                <img src={people} alt="" className="people-image" width="100%" />
            </div>
        </div>
    </div>

    
  )
}
