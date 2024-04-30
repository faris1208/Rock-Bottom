import React from 'react'
import today from "../assets/Img/Arrow.svg";
import { useNavigate } from "react-router-dom";
import red3 from "../assets/Img/red1.jpg";
import red2 from "../assets/Img/red2.jpg";
import red1 from "../assets/Img/red3.jpg";

export default function Features() {

    const navigate = useNavigate();

  return (
    <div className='Features-Container'>
        <div className='Support-Head'>
            <div className='Support-Text'>
                <h2>Support Rock Bottom Sickle Cell Initiative today</h2>
                {/* <img src={today} alt="" className="Today-image" width="100%" /> */}
            </div>
            <p>Help make our community a better place for all.</p>
        </div>
        <div className='Project-Container'>
            <div className='off-color'>
                <div className='Project-Head'>
                    <h3>Foundation and Awareness</h3>
                    <p>Establish an online presence for Rock Bottom Sickle cell Initiative to increase awareness and reach a wider audience.</p>
                    <button  onClick={() => {navigate("/register");}} className='LearnMore-btn'>Learn More</button>
                </div>
            </div>
            <div className='off-color2'>
                <div className='Project-Head2'>
                    <h3>Strengthening Support Systems</h3>
                    <p>Conduct workshops on self-help techniques and play dates, including mental health support for sickle cell patients and their families.</p>
                    <button onClick={() => {navigate("/register");}} className='LearnMore-btn'>Learn More</button>
                </div>
            </div>
            <div className='off-color3'>
                <div className='Project-Head3'>
                    <h3>Blood Bank Initiation</h3>
                    <p>Collaborate with medical institutions to identify potential locations and feasibility for the blood bank.</p>
                    <button onClick={() => {navigate("/register");}} className='LearnMore-btn'>Learn More</button>
                </div>
            </div>
        </div>
        <div className='Events-Container'>
            <h1>Upcoming Events</h1>
            <div className='Events-heading'>
                <div className='Event-Last'>
                    <div className='Events-Wrapper'>
                        <div className='Events-text'>
                            <h5>20</h5>
                            <p>APR</p>
                        </div>
                        <div className='Events-text-two'>
                            <p>Next Events</p>
                            <h6>Mental Health of those living with sickle cell</h6>
                            {/* <p>Mental Health of those living with sickle cell</p> */}
                        </div>
                        <div className='Arrow-Img'>
                            <img src={today} alt="" className="Arrow-image" width="100%" />
                        </div>
                    </div>
                    <div className='Events-Image'>
                        <img src={red1} alt="" className="red-image" width="100%" />
                    </div>
                </div>
                <div className='Event-Last'>
                    <div className='Events-Wrapper'>
                        <div className='Events-text'>
                            <h5>27</h5>
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
                    <div className='Events-Image'>
                        <img src={red2} alt="" className="red-image" width="100%" />
                    </div>
                </div>
                <div className='Event-Last'>
                    <div className='Events-Wrapper'>
                        <div className='Events-text'>
                            <h5>4</h5>
                            <p>MAY</p>
                        </div>
                        <div className='Events-text-two'>
                            <p>Next Events</p>
                            <h6>A day with our wonderful children </h6>
                        </div>
                        <div className='Arrow-Img'>
                            <img src={today} alt="" className="Arrow-image" width="100%" />
                        </div>
                    </div>
                    <div className='Events-Image'>
                        <img src={red3} alt="" className="red-image" width="100%" />
                    </div>
                </div>

            </div>
        </div>

        <div className='mission-container'>
            <div className='Mission-Text'>
                <h4>our mission</h4>
                <h2>Empower - Support - Educate: Building Resilient Lives</h2>
                <p>our mission is to make a meaningful impact in the lives of people affected by sickle cell disease. Our organization, the Rock Bottom Sickle Cell Initiative, has been tirelessly working to raise awareness about sickle cell disease and provide support to individuals and families affected by this condition.</p>
            </div>
            <div className='Mission-Text'>
                <h4>our Vision</h4>
                <h2>A World Where Every Sickle Cell Warrior Thrives</h2>
                <p>We are dedicated to raising awareness and providing comprehensive education about SCD to the public. Educate warriors on the need for frequent lab test. Blood test can detect other problems such as anaemia or organ damage so it can be treated early. Urine testing can also detect early kidney problems or infections.</p>
            </div>
        </div>

        <div className='New-Contribute'>
            <div className='Contribute'>
                <div className='Contribute-Background'>
                    <h2>Buy a rock bottom book or invest in one of our talented warrior today.</h2>
                    <div className='Buttons'>
                        <button onClick={() => {navigate("/register");}} className='Join-btn'>Join as a volunteer</button>
                        <button onClick={() => {navigate("/register");}} className='Donate-Now-btn'>Donate Now</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
