
import styled from 'styled-components';

export const AlertMessageContainer = styled.p`
  width: 30vw;
  padding: 1rem;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  border-radius: 5px;
  position: fixed;
  top: 25px;
  right: 0;
  left: 0;
  margin: 0 auto;
  animation: 400ms linear dropMessage;
  

  &.success{
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cB
  }

  &.error{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb
  }


 @keyframes dropMessage{
   0%{
    opacity: 0;
    top: 0;
    display: block;
   }
   to{
    opacity: 1;
    top: 25;
   }
 }
`;
