import React from 'react'
import play from "../assets/Img/Play icon.svg";
import Line12 from "../assets/Img/Line (1).svg";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default function Heading() {

    const navigate = useNavigate();

  return (
    <div className='Heading-Background'>
        <div className='Heading-Background-overlay'>
            <div className='Heading-container'>
                <div className='Heading-text'>
                    <h2>Sickle Cell Awareness one story at a time</h2>
                </div>
                <div className='Heading-Play'>
                    <button className='btn-Donate'>Donate Now</button>
                    <Link to={'#Contact'} style={{textDecoration: 'none'}} smooth>
                        <div className='play-text'>
                            <img src={play} alt="" className="play-image" width="100%" />
                            <p>Play Video</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='Edo-State-Youth'>
                <div className='Edo-State'>
                    <p>Edo state women and youth development</p>
                    <img src={Line12} alt="" className="play-image" width="100%" />
                    <h6>Stories That Touch</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
