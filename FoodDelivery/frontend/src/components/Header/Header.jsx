/**
 * @license XEONCORP
 * @fileoverview Menage all routes
 * @copyright iamrahman 2024 All rights reserved
 * @author iamrahman <iamhridoy0@gmail.com>
 */

import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu fraturing a delectable array of dishes crafted with the
                finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining
                experience, one delicious meal at a time.
            </p>
            <button>View Menu</button>

        </div>
    </div>
  )
}

export default Header