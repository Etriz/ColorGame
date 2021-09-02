import React from 'react'
import styled from 'styled-components'

interface IProps{
    color:string;
}
const ColorSquare = ({color}:IProps) => {
    return (
        <Square color={color}>{color}</Square>
    )
}

export default ColorSquare

const Square=styled.div`
    width:150px;
    height:150px;
    border:1px solid black;
    border-radius: .5rem;
    color:#000000;
    background: rgb(${props=>(props.color)});
`