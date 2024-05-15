/**
 * @license XEONCORP
 * @fileoverview Menage all routes
 * @copyright iamrahman 2024 All rights reserved
 * @author iamrahman <iamhridoy0@gmail.com>
 */

import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload