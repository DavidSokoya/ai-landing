import React, {useState} from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Study</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ai__navbar">
      <div className="ai__navbar-links">
         <div className="ai__navbar-links_ logo">
           <img src={logo} alt="ai-logo" />
         </div>
         <div className="ai__navbar-links_container">
           <Menu/>
         </div>
         </div>
         <div className="ai__navbar-sign">
           <p>Sign in</p>
           <button type='sunmit'>Sign up</button>
      </div>
      <div className="ai__navbar-menu">  
          {toggleMenu 
           ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
           : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/> }

          {toggleMenu && (
           <div className="ai__navbar-menu_container scale-up-center">
             <div className="ai__navbar-menu_container-links">
                <Menu/>
                <div className="ai__navbar-memu_container-sign">
                <p>Sign in</p>
                <button type='sunmit'>Sign up</button>
                </div>
             </div>
           </div>
          )}
      </div>
    </div>
  )
}

export default Navbar