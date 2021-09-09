import React,{useState} from 'react'
import styled from 'styled-components'

interface IProps{
    color:string;
    correct?:boolean;
    borderColor?:string;
}

const ColorSquare = ({color,correct}:IProps) => {
    const [borderColor,setBorderColor]=useState('black')

    const checkColor=()=>{
        if(correct){
            console.log(correct)
            setBorderColor('white')
        }
    }

    return (
        <Square color={color} onClick={()=>checkColor()} borderColor={borderColor}>{color}</Square>
    )
}

export default ColorSquare

const Square=styled.div<IProps>`
    width:150px;
    height:150px;
    color:#000000;
    background: rgb(${(props)=>props.color});
    border:2px solid ${props=>props.borderColor};
    border-radius: .5rem;
`
