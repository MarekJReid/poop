import React, {useState, useRef, useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
import "./App.scss"

import { clickMobileNavMenu, clickMobNavClose, nav2trans } from './animations.js'

function Header() {
    const [mobileNavMenu, setMobileNavMenu] = useState(false);

  let navbar = useRef(null);
  let mobNavMenu = useRef(null);
  let mobNavMenuLinks = useRef(null);
  let mobNavMenuClose = useRef(null);

useEffect(() => {
    nav2trans(navbar)
    
}, []);

const cclickMobileNavMenu = () => {
    setMobileNavMenu(!mobileNavMenu);
    if (mobileNavMenu) {
        clickMobileNavMenu(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
    }
    
 
}

const cclickMobNavClose = () => {
    setMobileNavMenu(!mobileNavMenu);
    clickMobNavClose(mobNavMenu, mobNavMenuClose, mobNavMenuLinks)
  };

    return (
        <div style={{margin: `0`}}>
            {/* Mobile Nav */}
            <div className="mobile-nav-box"
            >
                <Link to="/" className="mobile-logo-box"></Link>
                
                <div className="mobile-menu-icon" onClick={cclickMobileNavMenu}>
                    <div className="mobile-menu" ref={(el) => (mobNavMenu = el)}>
                        <div className="title"></div>
                        <div
                            className="close-icon"
                            onClick={cclickMobNavClose}
                            ref={(el) => (mobNavMenuClose = el)}
                        ></div>
                        <div className="links-box">
                            <ul ref={(el) => (mobNavMenuLinks = el)}>
                                <li onClick={cclickMobNavClose}> <Link to="/about">
                        <p>About</p>
                        </Link></li>
                                
                                <li onClick={cclickMobNavClose}>Story</li>
                                <li onClick={cclickMobNavClose}>Blog</li>
                                <li onClick={cclickMobNavClose}>Store</li>
                                <li onClick={cclickMobNavClose}>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       

       
        <div className="nav-box" ref={(el) => (navbar = el)}>
            <Link to='/' >
            <div className="logo-box"></div>
            </Link>
            <Link to='/'>
            <div className="nav-title">Sexy Site Title</div>
            </Link>
            <div className="nav-links">
                <ul>
                    <li>
                        
                    </li>
                    <li>
                        <Link to="/about">
                        <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/story">
                        <p>Story</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                        <p>Blog</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/store">
                        <p>Store</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/features">
                        <p>Features</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/subnav">
                        <p>SubNav</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                        <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Header
