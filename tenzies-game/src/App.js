import React from 'react'
import Die from './components/Die'
import {nanoid} from 'nanoid'

export default function App() {
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random()*6),
            isHeld: false ,
            id: nanoid()
        }
    }
    function allNewDice() {
        const arr = []
        for (let i=0; i<10; i++)
            arr.push(generateNewDie())
        return arr
    }

    function rollDice() {
        setDices(oldDices => oldDices.map(dice => {
            return dice.isHeld ? dice : generateNewDie()
        }))
    }

    function holdDice(id) {
        setDices(oldDices => oldDices.map(dice => dice.id === id ? {...dice, isHeld: !dice.isHeld}: dice))
    }

    const [dices, setDices] = React.useState(allNewDice)
    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(()=> {
        const previous = dices[0].value
        if (dices.every(dice => dice.isHeld && dice.value === previous)) {
            console.log("You are a winners!")
            setTenzies(true)
        }

    }, dices)

    const dies = dices.map(obj => <Die key={obj.id} holdDice={() => holdDice(obj.id)} isHeld={obj.isHeld} value={obj.value}/>)

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice--container">
                {dies}
            </div>
            <button className='roll-dice' onClick={rollDice}>{tenzies ? "New Roll": "Roll"}</button>
        </main>
    )
}