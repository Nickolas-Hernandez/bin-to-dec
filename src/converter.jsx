import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 64px;
  font-family: 'Quicksand', sans-seriff;
  color: white;
  background: linear-gradient(#F2994A, #F2C94C)
`;

export default class Converter extends React.Component {

  render(){
    return (
      <Container></Container>
    );
  }
}
