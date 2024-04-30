import React from 'react'
import line from "../volunteer/image 2.svg";

export default function Volunteer() {
  return (
    <div>
        
        <div className='Volunteer-Container'>
            <div className='Volunteer-Img'>
                <img src={line} alt="" className="Volunteer-image" width="100%" />
            </div>
            <div className='Volunteer-Form'>
                <div className='Volunteer-Text'>
                    <h3>Volunteer Today!</h3>
                    <p>You are one step away from making an impact on the lives of people that need it every day</p>
                </div>
                <form>
                    <div className='Form-Head'>
                        <div className='Form-Label'>
                            <label>First Name</label>
                            <input type='text' className='Form-input' />
                        </div>
                        <div className='Form-Label'>
                            <label>Last Name</label>
                            <input type='text' className='Form-input' />
                        </div>
                    </div>
                    <div className='Form-Label'>
                        <label>Email Address</label>
                        <input type='email' className='Form-input' />
                    </div>
                    <div className='Form-Label'>
                        <label>Message</label>
                        <textarea type='text' className='Form-textarea' placeholder='Type your message' />
                    </div>
                    <input type='button' value={"Send a message"} className='Message-btn'  />

                </form>
            </div>
        </div>
    </div>
  )
}
