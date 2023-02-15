import React from 'react'
import logo from '../images/logo.png'

function NavBar() {
    return (
        <nav>
            <img src={logo} className="nav--icon" alt='k'/>
            <h3 className='nav--logo-text'>React Facts</h3>
            <h4 className='nav--title'>React course - Project 1</h4>
        </nav>
    )
}

export default NavBar