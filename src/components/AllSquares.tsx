import React,{ useEffect,useState} from 'react';
import styled from 'styled-components';
import ColorSquare from 'components/ColorSquare';


interface IProps {
  generateColors:Function;
  setGuess:Function;
  // any other props that come into the component
}

const AllSquares = ({generateColors,setGuess}:IProps) => {
  const[color01,setColor01]=useState(generateColors())
  const[color02,setColor02]=useState(generateColors())
  const[color03,setColor03]=useState(generateColors())

  const arr=[color01,color02,color03]

  useEffect(() => {
    console.log('arr',arr);
    
    const random=Math.floor(Math.random()*arr.length)
    const guessnum=arr[random]
    console.log(guessnum);
    
    setGuess(guessnum)
  }, [])

  return (
    <Container>
      <ColorSquare color={color01} />
      <ColorSquare color={color02} />
      <ColorSquare color={color03} />
    </Container>
  );
};

export default AllSquares;

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
