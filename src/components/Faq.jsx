import React from 'react'
import line from "../assets/Img/Line.svg";
import people from "../assets/Img/Video.svg";

export default function Faq() {
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
                <h6>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
            </div>
        </div>

        <div className='Faq-two'>
            <div className='Faq-two-text'>
                <h2>Empowerment</h2>
                <p>We empower warriors by sharing knowledge, sharing stories, listening to stories, providing resources, embracing positivity and opportunities for personal and professional growth all by building a network/community.</p>
                <button className='Learn-btn'>Learn More</button>
            </div>
            <div className='people-video'>
                <img src={people} alt="" className="people-image" width="100%" />
            </div>
        </div>
    </div>

    
  )
}
