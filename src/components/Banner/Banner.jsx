import React from 'react'
import './Banner.css'
import banner from "../../../public/Banner.jpeg"
export const Banner = () => {
  return (
    <>
        <div className="banner">
            <img src={banner} alt="banner" />
            <div className="writingonBanner">
            <p>Most of us experiencing mental and physical imbalance.</p>
        </div>
        </div>
        
    </>
  )
}
