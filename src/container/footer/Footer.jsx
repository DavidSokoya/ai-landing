import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="ai__footer section__padding">
      <div className="ai__footer-heading">
        <h1 className="gradient__text">
        Do you want to step in to the future before others
        </h1>
        <p>Request Early Access</p>
      </div>
      <div className="ai__footer-container">
        <div className="ai__footer-container__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
          <div className="ai__footer-container__content-div">
            <h1>Links</h1>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="ai__footer-container__content-div">
            <h1>Company</h1>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="ai__footer-container__content-div">
            <h1>Get in touch</h1>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-13256</p>
            <p>Contact</p>
          </div>
      </div>
      <div className="ai__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer