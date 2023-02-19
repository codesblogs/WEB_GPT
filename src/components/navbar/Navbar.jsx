import React from 'react'   //before starting code, we can import few icons
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';    //importing icons 
import logo from '../../assets/logo.svg'
import './navbar.css'
// <Menu />  will help to call this Menu()
const Menu = () => (
  <>        {/* <>...</>  wrap in react fragment */}
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)
// U can see we are using different className because we are following specifoc CSS convention
// BEM =>  Block  Element Modifier
// now we require image/logo to use so we go for figma
// toggle is an element used for hide and show
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false); // after importing usestate hook
  return (
    <div className="gpt3__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">    
          <img src={logo} alt="logo"/>
        </div>
          <div className='gpt3__navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div> 
        {/* now to add Mobile-Responsive we require to add new div & use toggleMenu */}
        <div className="gpt3__navbar-menu"> 
          { toggleMenu 
            ? <RiCloseLine color="#fff" sizee={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" sizee={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-canter">
              <div className="gpt3__navbar-menu_conatiner-links">
                <Menu /> {/* calling Menu() under mob responsiveness*/}
               <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
               </div> 
              </div>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar
// repeat article & brand & cta, feature component with replacing navbar name instead same process
// Navigation bar with menu & mob/tab responsiveness finished
