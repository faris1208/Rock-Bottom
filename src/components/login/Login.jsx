import React from 'react'
import image3 from "../login/image 3.svg";

export default function Login() {
  return (
    <div>
        <div className='Login-Container'>
            <div  className='Login-Img'>
                <img src={image3} alt="" className="Login-image" width="100%" />
            </div>
            <div className='Login-Form'>
              <div className='Login-Start'>
                <h1>Log in</h1>
                <p>Don’t have an account? <span id='Sign-up'>Sign Up</span></p>
                <input type='email' placeholder='Email Address' className='Email-input' />
                <div className='Password'>
                  <input type='password' placeholder='Password' className='password-input' />
                </div>
                <input type='button' value={"Log in"} className='Logged-in-btn' />
                <a href='/'>Forgot your Password?</a>
              </div>
            </div>
        </div>
    </div>
  )
}
