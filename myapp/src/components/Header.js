import React from 'react'
import logo from '../images/logo.png'

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt='kkk' className="nav-logo" />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}