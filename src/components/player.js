import React from 'react'
import { useState, useEffect } from 'react'

const Player = () => {
    const [cards, setCards] = useState([])
    const [total, setTotal] = useState(0)
    const [stay, setStay] = useState(false)
    const [dealerCards, setDealerCards] = useState([])
    const [dealerTotal, setDealerTotal] = useState(0)

    useEffect(() => {
        setTotal(Math.floor(Math.random() * 11) * 2)
        setDealerTotal(Math.floor(Math.random() * 11) * 2)
    }, [])

    let number = Math.floor(Math.random() * 11)

    const deal = () =>{
        setCards([...cards, number])
        setTotal(total + number)
    }

    const clear = () => {
        setCards([])
        setTotal(0)
        setStay(false)
    }

    const youLose = () => {
        alert('You Lose!')
    }

    const handleStay = () => {
        setStay(!stay)
    }

    const dealerDraw = () => {
        setDealerTotal(dealerTotal + number)
    }

    const game = () => {
        if(dealerTotal < 21 && dealerTotal <= total){
            dealerDraw()
    }

    // if(dealerTotal < total || dealerTotal > 21){
    //     alert('You win!')
    // } else
    // alert ('You Lose!')
}

    return(
        <div>
            <div>
                <h3>Dealer</h3>
                { stay ? game() : null }
                <h5>{dealerTotal}</h5>
            </div>
            <div>
                <h3>Player</h3>
                {/* <h3>{cards}</h3> */}
                <h5>{total}</h5>
            </div>
            {total > 21 ? youLose() : null }
            <button onClick={deal}>{stay ? null : 'Deal'}</button><br/>
            <button onClick={handleStay}>Stay</button><br />
            <button onClick={clear}>Clear</button>
        </div>
    )
}

export default Player