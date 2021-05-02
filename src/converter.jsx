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

const BinaryInput = styled.input`
  width: 75%;
  max-width: 500px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 4px;
  text-align: center;
  margin-top: 1.2rem;
  font-size: 24px;
  font-weight: 500;
`;

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {decimal: 0}
    this.binToDec = this.binToDec.bind(this);
  }

  binToDec(event){
    const input = event.target.value;
    if(input === '') this.setState({decimal: 0});
    const regex = /[^10]/i;
    if(regex.test(input)){
      console.error('Invalid Input. Please enter a binary number consisting of only 1\'s and 0\'s');
      this.setState({decimal: 0});
      return;
    }
    let decimal = 0;
    for(let i = 0; i < input.length; i++){
      decimal = decimal * 2 + parseInt(input[i]);
      this.setState({decimal: decimal});
    }
  }

  render(){
    return (
      <Container>
        <Decimal>{this.state.decimal}</Decimal>
        <Prompt>Please Enter an 8-Bit Binary Number:</Prompt>
        <BinaryInput onChange={this.binToDec} maxLength='8'></BinaryInput>
      </Container>
    );
  }
}
