import React from 'react'
import './About.css'
import About_img from "../../assets/About.jpg"
import play_icon from "../../assets/play-icon.png"
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={About_img} alt=""  className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>About Our University</h3>
        <h2>Making the Future of Our World Brighter</h2>
        <p>We firmly believe in training our students to tackle with the ever growing compitition in
          the workforce to make sure they are well skilled and well prepared to deal and excel in the
          wworkforce.</p>
          <p>Our programs and training provide our students with skills and self-confidence necessary
            to excel and make themselves a better version of themselves then they were before.</p>
          <p>Whether your dream is to become a Doctor, Enginner, Manager, Councelor our wide range
            of programs and hands on training will make your dreams come true because your dream is
            our dream and we will fulfill it together.</p>
      </div>
    </div>
  )
}

export default About
