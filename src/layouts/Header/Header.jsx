import React from 'react'
import './Header.css'
import logo from "../../../public/brandlogo.jpg"
export const Header = () => {
  return (
   <>
   <header>
    <div className='container'>
      <nav>
        <div className='left'>
          <div className="navlogo">
            <img src={logo} alt="brand_logo"/>
          </div>
        </div>
        <ul className="right">
          <li>About Us</li>
          <li>Science</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
   </header>
   </>
  )
}
