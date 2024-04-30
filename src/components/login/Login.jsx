import React from 'react'
import line from "../about-us/Line.svg";

export default function Login() {
  return (
    <div>
        <div className='Login-Container'>
            <div  className='Login-Img'>
                <img src={line} alt="" className="Login-image" width="100%" />
            </div>
            <div></div>
        </div>
    </div>
  )
}
