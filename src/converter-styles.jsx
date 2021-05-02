import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
  @media screen and (min-width: 750px){
    font-size: 28px;
  }
`;

const BinaryInput = styled.input`
  width: 75%;
  max-width: 500px;
  height: 32px;
  border: none;
  outline: none;
  border-radius: 4px;
  text-align: center;
  margin-top: 1.2rem;
  font-size: 24px;
  font-weight: 500;
`;

export {
  Container,
  Decimal,
  Prompt,
  BinaryInput
};
