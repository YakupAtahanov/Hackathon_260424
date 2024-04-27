import React from 'react'
import logo from "../../../assets/logo.png"
import demoPng from "../../../assets/demo.png"
import aboutPng from "../../../assets/about.png"
import commentPng from "../../../assets/comment.png"
import editPng from "../../../assets/edit.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header className='header'>
            <div className='header-logo'>
                <img src={logo} alt="img" />
                <h2 className='header-title'>Docster AI</h2>
            </div>

            <div className='navbar'>
                <div className='header-demo'>
                    <h4 className='header-navbar-title'>Use Demo</h4>
                    <img src={demoPng} alt="img" />
                </div>
                <div className='header-about'>
                    <h4 className='header-navbar-title'>About</h4>
                    <img src={aboutPng} alt="img" />
                </div>
                <div className='header-contact'>
                    <h4 className='header-navbar-title'>Contact</h4>
                    <img src={commentPng} alt='img'/>
                </div>
                <div className='header-auth'>
                    <div className='header-auth-sign'>
                        <button variant='dark'>Sign in</button>
                    </div>
                    <div className='header-auth-sign'>
                        <img src={editPng} alt="img"/>
                    </div>
                    <div className='header-auth-sign'>
                        <button variant='outline-dark'>Sign up</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar