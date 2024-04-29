import React from 'react'
import today from "../assets/Img/Arrow.svg";

export default function Features() {
  return (
    <div className='Features-Container'>
        <div className='Support-Head'>
            <div className='Support-Text'>
                <h2>Support Rock Bottom Initiative today</h2>
                {/* <img src={today} alt="" className="Today-image" width="100%" /> */}
            </div>
            <p>Help make our community a better place for all.</p>
        </div>
        <div className='Project-Container'>
            <div className='off-color'>
                <div className='Project-Head'>
                    <h3>Mission smile 1k: Outdoor charity</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <button className='LearnMore-btn'>Learn More</button>
                </div>
            </div>
            <div className='off-color2'>
                <div className='Project-Head2'>
                    <h3>Weekly excursions</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <button className='LearnMore-btn'>Learn More</button>
                </div>
            </div>
            <div className='off-color3'>
                <div className='Project-Head3'>
                    <h3>Monthly public awareness</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <button className='LearnMore-btn'>Learn More</button>
                </div>
            </div>
        </div>
        <div className='Events-Container'>
            <h1>Upcoming Events</h1>
            <div className='Events-heading'>
                <div className='Events-Wrapper'>
                    <div className='Events-text'>
                        <h5>13</h5>
                        <p>APR</p>
                    </div>
                    <div className='Events-text-two'>
                        <p>Next Events</p>
                        <h6>A day with our wonderful children </h6>
                    </div>
                    <div className='Arrow-Img'>
                        <img src={today} alt="" className="Arrow-image" width="100%" />
                    </div>
                </div>

                <div className='Events-Wrapper'>
                    <div className='Events-text'>
                        <h5>13</h5>
                        <p>APR</p>
                    </div>
                    <div className='Events-text-two'>
                        <p>Next Events</p>
                        <h6>A day with our wonderful children </h6>
                    </div>
                    <div className='Arrow-Img'>
                        <img src={today} alt="" className="Arrow-image" width="100%" />
                    </div>
                </div>

                <div className='Events-Wrapper'>
                    <div className='Events-text'>
                        <h5>13</h5>
                        <p>APR</p>
                    </div>
                    <div className='Events-text-two'>
                        <p>Next Events</p>
                        <h6>A day with our wonderful children </h6>
                    </div>
                    <div className='Arrow-Img'>
                        <img src={today} alt="" className="Arrow-image" width="100%" />
                    </div>
                </div>
            </div>
        </div>

        <div className='mission-container'>
            <div className='Mission-Text'>
                <h4>our mission</h4>
                <h2>Empower - Support - Educate: Building Resilient Lives</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div className='Mission-Text'>
                <h4>our Vision</h4>
                <h2>A World Where Every Sickle Cell Warrior Thrives</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
        </div>

        <div className='Contribute'>
            <div className='Contribute-Background'>
                <h2>You can contribute to provide a place for children with special needs!</h2>
                <div className='Buttons'>
                    <button className='Join-btn'>Join as a volunteer</button>
                    <button className='Donate-Now-btn'>Donate Now</button>
                </div>
            </div>
        </div>

    </div>
  )
}
