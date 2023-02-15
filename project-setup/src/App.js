import React from 'react'
import './styles.css'
import NavBar from './components/Navbar'
import Main from './components/Main'

export default function App() {
    return (
        <div className='container'>
            <NavBar />
            <Main />
        </div>
    )
}
