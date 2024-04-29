import React from 'react'
import Logo2 from "../assets/Img/Logo2.svg";
import icon1 from "../assets/Img/Instagram.svg";
import icon2 from "../assets/Img/Twitter.svg";
import icon3 from "../assets/Img/Youtube.svg";

export default function Footer() {
  return (
    <footer>
        <div className='Footer-Logo'>
            <img src={Logo2} alt="" className="Logo2-image" width="100%" />
        </div>
        <div className='Footer-Text'>
            <p>© 2024 Rockbottom Initiative.  All rights reserved</p>
        </div>
        <div className='Footer-Icons'>
            <img src={icon1} alt="" className="Icons-image" width="100%" />
            <img src={icon2} alt="" className="Icons-image" width="100%" />
            <img src={icon3} alt="" className="Icons-image" width="100%" />
        </div>
    </footer>
  )
}
