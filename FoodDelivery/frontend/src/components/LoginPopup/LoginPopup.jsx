/**
 * @license XEONCORP
 * @fileoverview Menage all routes
 * @copyright iamrahman 2024 All rights reserved
 * @author iamrahman <iamhridoy0@gmail.com>
 */

import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

  const [currState,setCurrState] = useState("Login")

    
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
              {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required name="" id="" />}              
              <input type="email" placeholder='Your Email' required name="" id="" />
              <input type="password" placeholder='Password' required />
            </div>

            <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
              <input type="checkbox" required name="" id="" />
              <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
            :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
      
        </form>
    </div>
  )
}

export default LoginPopup