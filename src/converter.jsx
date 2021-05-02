import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 64px;
  font-family: 'Quicksand', sans-seriff;
  color: white;
  background: linear-gradient(to top, #F2994A, #F2C94C);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.5rem;
`;

const Decimal = styled.h1`
  font-size: 64px;
`;

const Prompt = styled.h2`
  font-size: 24px;
  max-width: 75%;
  text-align: center;
`;

export default class Converter extends React.Component {

  render(){
    return (
      <Container>
        <Decimal>0</Decimal>
        <Prompt>Please Enter an 8-Bit Binary Number:</Prompt>
      </Container>
    );
  }
}
