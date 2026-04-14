import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exchange</h1>
            <h1>Offers for you</h1>
            <p>ONLY BEST SELLERS</p>
            <button>CHECK NEW</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>


    </div>
  )
}

export default Offers