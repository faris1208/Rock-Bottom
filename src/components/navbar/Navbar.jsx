import React from 'react'
import logo from '../navbar/Logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";
import {  useState } from "react";

export default function Navbar() {

  const [mobile, setMobile] = useState(true);

  // useEffect(() => {
  //   const scroll = () => {
  //     if (window.scroll) {
  //       setMobile(mobile);
  //     }
  //   };

  //   window.addEventListener("scroll", scroll);
  // }, []);

  return (
    <nav>
      <div className='Navbar'>
        <div className='Navbar-Img'>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className={`Navbar-List ${ mobile && "block"}`}>
          <ul>
            <li>About Us</li>
            <li>Volunteer</li>
            <li>Login</li>
            <li>Register</li>
            <li>Donate Now</li>
          </ul>
        </div>
        <div className="Nav-hamburger">
            <span
              className="Hamburger span"
              onClick={() => setMobile((prevState) => !prevState)}
            >
              <div className="text-white text-4xl">
                {mobile ? <RxHamburgerMenu /> : <TbLetterX />}
              </div>
            </span>
        </div>
      </div>
    </nav>

    
        
  )
}
