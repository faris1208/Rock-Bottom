import React from 'react'
import line from "../about-us/Line.svg";
import Blog from "../about-us/Blog Post.svg";
import facebook from "../about-us/Facebook.svg";
import tweet from "../about-us/Negative.svg";
import linkedin from "../about-us/Linkdin.svg";

export default function About() {
  return (
    <div>
         <div className='Faq'>
            <div className='Faq-text-one'>
                <div className='line-faq'>
                    <img src={line} alt="" className="line-image" width="100%" />
                    <h4>Who we are</h4>
                </div>
                <h2>We are a non-governmental organization</h2>
            </div>
            <div className='Faq-text-two'>
                <h6>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
            </div>
        </div>
        <div className='Inclusive-Container'>
            <div className='Inclusive-Heading'>
                <h2>Our goal is to provide inclusive care for people with special needs</h2>
                <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <button className='See-More-btn'>See more</button>
            </div>
            <div className='Blog-Wrapper'>
                <img src={Blog} alt="" className="Blog-image" width="100%" />
            </div>
        </div>
        <div className='Contact-Wrapper'>
            <div className='Contact-Text'>
                <h2>We'd love to hear from you</h2>
                <p>Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details.</p>
            </div>
            <div className='Contact-Contact'>
                <div className='Contact-One'>
                    <h4>Contact us</h4>
                    <h3>Let's talk! </h3>
                    <p>hello@largerthani.com</p>
                    <p>+234 09012346514</p>
                </div>
                <div className='Contact-Two'>
                    <h3>Volunteer Office</h3>
                    <p>8 Brewery Drive, Lagos, Nigeria.</p>
                    <div className='Facebook-Img'>
                        <img src={facebook} alt="" className="tweet-image" width="100%" />
                        <img src={tweet} alt="" className="tweet-image" width="100%" />
                        <img src={linkedin} alt="" className="tweet-image" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
