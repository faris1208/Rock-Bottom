import React from 'react'
import one from "../assets//Img/Logo (1).svg";
import two from "../assets/Img/Logo (2).svg";
import three from "../assets/Img/Logo (4).svg";
import four from "../assets/Img/Logo (5).svg";
import five from "../assets/Img/Logo (6).svg";
import six from "../assets/Img/Logo (7).svg";

export default function Logo() {
  return (
    <div className='Logo-Heading'>
        <h4>Our Supporters</h4>
        <div className='Logo-Img'>
            <img src={one} alt="" className="Logo-image" width="100%" />
            <img src={two} alt="" className="Logo-image" width="100%" />
            <img src={three} alt="" className="Logo-image" width="100%" />
            <img src={four} alt="" className="Logo-image" width="100%" />
            <img src={five} alt="" className="Logo-image" width="100%" />
            <img src={six} alt="" className="Logo-image" width="100%" />
        </div>
    </div>
  )
}
