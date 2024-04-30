import React from 'react'
import one from "../assets//Img/New/EDO WOMEN.png";
import two from "../assets/Img/New/Sickle care logo.png";
import three from "../assets/Img/New/Salveo Logo.png";
import four from "../assets/Img/New/EDO 2.png";
import five from "../assets/Img/New/Tunde-web1_Logo-319-x-120new-300x129.png";
import six from "../assets/Img/New/Sickle care logo2.png";

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
