import React from 'react'
import Action from './components/Action'
import About from './components/About'
import Footer from './components/Footer'
import me from './images/me.jpg'

export default function App() {
    return (
        <div className='container'>
            <div className="card">
                <img src={me} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <Action />
                    <About />
                    <Footer />
                </div>
            </div>
           
        </div>
    )
}