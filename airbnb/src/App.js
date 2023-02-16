import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'

export default function App () {
    
    const items = data.map( e => 
        <Card 
            key = {e.id}
            {...e}
        />
    )

    return (
        <div>
            <Navbar />
            <Hero/>
            <section className='cards-list'>
                {items}
            </section>
            
        
        </div>
    )
}