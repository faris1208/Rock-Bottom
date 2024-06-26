import React from 'react'
import logo from '../navbar/Logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";
import { TbLetterX } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const [mobile, setMobile] = useState(true);

  const toggleMenu = () => {
    setMobile((open) => !open)
}

const handleNavbar = (path) => {
  navigate(path)
  toggleMenu()
}




  useEffect(() => {
    const scroll = () => {
      if (window.scroll) {
        setMobile(mobile);
      }
    };

    window.addEventListener("scroll", scroll);
  }, []);

  return (
    <nav>
      <div className='Navbar'>
        <div className='Navbar-Img'>
          <img src={logo} className="logo" alt="logo" onClick={() => {navigate("/");}} />
        </div>
        <div  className={`Navbar-List ${mobile ? "is-open" : ""}`}>
          <ul>
            <li onClick={() => {handleNavbar("/about") ;}} >About Us</li>
            <li onClick={() => {handleNavbar("/volunteer");}}>Volunteer</li>
            <li onClick={() => {handleNavbar("/login");}}>Login</li>
            <li onClick={() => {handleNavbar("/register");}}>Register</li>
            <li>Donate Now</li>
          </ul>
        </div>

        <div className='Navbar-List2'>
          <ul>
            <li onClick={() => {navigate("/about");}}>About Us</li>
            <li onClick={() => {navigate("/volunteer");}}>Volunteer</li>
            <li onClick={() => {navigate("/login");}}>Login</li>
            <li onClick={() => {navigate("/register");}}>Register</li>
            <li>
              <button className='First-Donate-Now-btn'>Donate Now</button>
            </li>
          </ul>
        </div>

        <div className="Nav-hamburger">
            <span
              className="Hamburger span"
              onClick={toggleMenu}
              // onClick={() => setMobile((open) => !open)}
            >
              <div className="Hamburger">
                {mobile ? <RxHamburgerMenu className='harm' /> : <TbLetterX className='harm' />}
              </div>
            </span>
        </div>
      </div>

      
    </nav>

    

    
        
  )
}
