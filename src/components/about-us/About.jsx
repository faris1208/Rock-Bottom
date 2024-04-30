import React from 'react'
import line from "../about-us/Line.svg";
import woman from "../about-us/IMG_3715.JPEG";
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
                {/* <h6>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h6> */}
                <h6>CORE VALUES:</h6>
                <p>
Accuracy: We are committed to providing accurate and reliable information.
Integrity: We uphold the highest ethical standards in data assessment and reporting
Transparency: We are open and transparent about our methodologies and findings.
Trust: We build trust by delivering consistent and dependable data evaluations.</p>
            </div>
        </div>
        <div className='Inclusive-Container'>
            <div className='Inclusive-Heading'>
                {/* <h2>Our goal is to provide inclusive care for people with special needs</h2> */}
                <p>Tola, originally from Benin City, Nigeria, now resides in the UK where she works as a property lawyer. Growing up with sickle cell and three siblings, two of whom are sickle cell warriors, Tola has witnessed firsthand the challenges of living with the disease. After a near-death experience that left her believing she might never walk again, Tola had to relearn how to walk, a journey that profoundly impacted her perspective on life.</p>
                <p>Motivated by her own struggles, Tola felt compelled to share her story and offer encouragement to others facing similar hardships. Recognizing the lack of sickle cell foundations in her hometown of Benin City, she saw an opportunity to raise awareness and provide support to those in need. Tola's mission is not only to educate others about sickle cell disease but also to build a community where warriors feel understood and empowered.</p>
                <button className='See-More-btn'>See more</button>
            </div>
            <div className='Blog-Wrapper'>
                <img src={woman} alt="" className="Blog-image" width="100%" />
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
                    {/* <p>rock bottom.ceo@outlook.com</p> */}
                    <a href='https://bottom.ceo@outlook.com'>rock bottom.ceo@outlook.com</a>
                    <p>+44 7440 755287</p>
                </div>
                <div className='Contact-Two'>
                    <h3>Volunteer Office</h3>
                    <p>BENIN GRA, Benin, Edo State</p>
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
