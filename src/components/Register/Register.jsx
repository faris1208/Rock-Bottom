import React from 'react'
import line from "../Register/image 2 (1).svg";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const navigate = useNavigate();

    
  return (
    <div>
        <div className='Register-container'>
            <div className='Register-Img'>
                <img src={line} alt="" className="Volunteer-image" width="100%" />
            </div>
            
            <div className='Register-Form'>
                <div className='Register-Text'>
                    <h3>Join Us</h3>
                    <p> Register and Be Part of the Rock Bottom Family."</p>
                </div>
                <form className='from-form'>
                    <div className='from-form-label'>
                        <label>Full Name</label>
                        <input type='text' className='from-form-input' />
                    </div>
                    <div className='from-form-label'>
                        <label>Username</label>
                        <input type='text' className='from-form-input' />
                    </div>
                    <div className='from-form-label'>
                        <label>Email Address</label>
                        <input type='email' className='from-form-input' />
                    </div>
                    <div className='from-form-label'>
                        <label>Date of birth</label>
                        <input type='date' className='from-form-input' />
                    </div>
                    <div className='from-form-label'>
                        <label>Password</label>
                        <input type='password' className='from-form-input' />
                    </div>
                    <div className='from-form-label'>
                        <label>Confirm Password</label>
                        <input type='password' className='from-form-input' />
                    </div>
                    <input  onClick={() => {navigate("/login");}} type='button' value={"Register"} className='Register-btn'  />
                </form>
            </div>
        </div>
            
    </div>
  )
}
