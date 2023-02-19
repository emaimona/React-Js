import React from 'react'

export default function Meme() {

    const [allMemeImages, setAllMemeImages] = React.useState({})
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/7b7mkw.jpg"
    })
    const {topText, bottomText} = meme

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    },[])
    

    function getMemeImage(e) {
        const array = allMemeImages
        let idx = Math.floor(Math.random() * array.length)
        setMeme(prev => ({...prev, randomImage: array[idx].url }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme( prev => {
            return {...prev, [name] : value};
        })
    }

    return (
        <main>
            <div className='form'>
                <input onChange={handleChange} value={topText} name='topText' type='text' className='form--input' placeholder='Shut up'/>
                <input onChange={handleChange} value={bottomText} name='bottomText' type='text' className='form--input' placeholder='and take my money'/>
                <button onClick={getMemeImage} className='form--button'>Get a new meme image 🖼 </button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='meme--image' alt='' />
                <h2 className='meme--text top'>{topText}</h2>
                <h2 className='meme--text bottom'>{bottomText}</h2>
            </div>
            
        </main>
    )
}