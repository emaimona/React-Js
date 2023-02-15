import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/MainContent'
import Footer from './components/Footer'
import './styles.css'

function App() {
    return (
        <>
            <Header />
            <Body />
            <Footer/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))