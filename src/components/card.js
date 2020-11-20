import React from 'react'

const Card = () => {

    let number = Math.floor(Math.random() * 11)

    return(
        <>
        <div class="card">
            <div class="container">
                <h3>{number}</h3>
            </div>
        </div>
        </>
    )
}

export default Card 