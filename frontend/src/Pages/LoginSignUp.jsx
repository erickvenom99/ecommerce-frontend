import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Signup</h1>
          <div className="loginsignup-field">
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id=""/>
            <p>By continuing, i agree to our Terms of Service and Privacy Policy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignUp;
