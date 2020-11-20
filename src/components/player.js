import React from 'react'
import { useState } from 'react'

const Player = () => {
    const [cards, setCards] = useState([])
    const [total, setTotal] = useState(0)

    let number = Math.floor(Math.random() * 11)

    const deal = () =>{
        setCards([...cards, number])
        setTotal(total + number)
    }

    const clear = () => {
        setCards([])
        setTotal(0)
    }

    const youLose = () => {
        alert('You Lose!')
    }


    return(
        <div>
            <div>
                <h3>{cards}</h3>
                <h5>{total}</h5>
            </div>
            {total > 21 ? youLose() : null }
            <button onClick={deal}>Deal</button><br/>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Player