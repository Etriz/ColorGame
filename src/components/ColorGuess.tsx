import React from 'react'

const ColorGuess = ({guess}:any) => {

    return (
        <div>
            <h2>
                Guess the Color!
            </h2>
            <p>
                {guess}   
            </p>
        </div>
    )
}

export default ColorGuess

