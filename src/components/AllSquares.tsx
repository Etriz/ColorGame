import React,{ useEffect,useState} from 'react';
import styled from 'styled-components';
import ColorSquare from 'components/ColorSquare';


interface IProps {
  generateColors:Function;
  setGuess:Function;
  // any other props that come into the component
}

const AllSquares = ({generateColors,setGuess}:IProps) => {
  const [colors,setColors]=useState([generateColors(),generateColors(),generateColors()])

  const getNewColors=()=>{
    setColors([generateColors(),generateColors(),generateColors()])
  }

  useEffect(() => {
    const random=Math.floor(Math.random()*colors.length)
    const guessNum=colors[random]    
    setGuess(guessNum)
  }, [colors,setGuess])
  
  return (
    <>
    <Container>
      <ColorSquare color={colors[0]} />
      <ColorSquare color={colors[1]} />
      <ColorSquare color={colors[2]} />
    </Container>
    <Button onClick={()=>getNewColors()}>New Colors</Button>
    </>
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

const Button = styled.button`
  outline:none;
  border:none;
  border-radius: .5rem;
  padding:.5rem 1rem;
  margin:1rem 0;
  font-size: 1rem;
`
