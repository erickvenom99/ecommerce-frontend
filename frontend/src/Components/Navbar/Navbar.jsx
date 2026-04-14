import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu] = useState('Shop')
  return (
    <div className='navbar'>
       <div className="nav-logo">
        <img src={logo} alt="" />
        <p className="nav-logo-text">SHOPPER</p>
       </div>
       <ul className="nav-menu">
        <li onClick={()=>{setMenu('Shop')}}><Link style={{ textDecoration:'none'}} to="/">Shop</Link>{menu==='Shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Women')}}><Link style={{ textDecoration:'none'}} to="/women">Women</Link>{menu==='Women'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Men')}}><Link style={{ textDecoration:'none'}} to="/men">Men</Link>{menu==='Men'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('Kids')}}><Link style={{ textDecoration:'none'}} to="/kids">Kids</Link>{menu==='Kids'?<hr/>:<></>}</li>
       </ul>
       <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
       </div>

    </div>
  )
}
