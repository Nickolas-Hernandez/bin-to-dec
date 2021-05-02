import React from 'react';
import ErrorMessage from './error-message';
import { Decimal, Prompt, BinaryInput, Container } from './converter-styles';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decimal: 0,
      notify: false
    }
    this.binToDec = this.binToDec.bind(this);
  }

  binToDec(event){
    this.setState({notify: false});
    const input = event.target.value;
    if(input === '') this.setState({decimal: 0});
    const regex = /[^10]/i;
    if(regex.test(input)){
      this.setState({decimal: 0, notify: true});
      throw new Error("Invalid Input. Binary must only consist of 1's and 0's")
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
        <ErrorMessage notify={this.state.notify}/>
        <Decimal>{this.state.decimal}</Decimal>
        <Prompt>Please Enter an 8-Bit Binary Number:</Prompt>
        <BinaryInput onChange={this.binToDec} maxLength='8'></BinaryInput>
      </Container>
    );
  }
}
