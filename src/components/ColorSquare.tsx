import React from 'react'
import styled from 'styled-components'

const ColorSquare = () => {
    return (
        <Square>
            a color square
        </Square>
    )
}

export default ColorSquare

const Square=styled.div`
    width:100px;
    height:100px;
    border:1px solid white;
    border-radius: .5rem;
`