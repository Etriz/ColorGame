import React from 'react';
import styled from 'styled-components';
import ColorSquare from './ColorSquare';

const AllSquares = () => {
  return (
    <Container>
      <ColorSquare />
      <ColorSquare />
      <ColorSquare />
    </Container>
  );
};

export default AllSquares;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
