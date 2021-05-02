import React from 'react';
import styled from 'styled-components';

const Notification = styled.div`
  width: 100%;
  max-width: 500px;
  height: 50px;
  background-color:white;
  position: absolute;
  top: -55px;
  color: white;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  box-shadow: 0 4px 10px rgba(255,175,77,0.9);
  background: #ffaf4d;
  transition: transform 0.5s linear;
  transform: ${props => props.notify ? "translateY(110%)" : ''};
`;

const Wrap = styled.span`
  color: #dc1010;
`;

export default function ErrorMessage(props){
  return (
    <Notification><p><Wrap>Invalid Input.</Wrap> Binary consist of 1's and 0's only.</p></Notification>
  );
}
