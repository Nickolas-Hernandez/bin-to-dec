import React from 'react';
import styled from 'styled-components';

const Notification = styled.div`
  width: 100%;
  height: 50px;
  background-color:white;
  position: absolute;
  top: 0;
  color: #e82a00;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 10px #F2994A;
  background: #f5ab6a;
`;

export default function ErrorMessage(props){
  return (
    <Notification><p>Invalid Input. Binary only consists of 1's and 0's.</p></Notification>
  );
}
