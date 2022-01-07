import styled from 'styled-components';

export const SignUpContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  color: #FFF;

  flex: 1;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;

  button{
    font-size: 1.5rem;
    padding:1rem 4rem;
    border-radius: 50px;
    background: ${({theme})=> theme.color.black};
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    transition: 400ms ease;
    &:hover{
      background: #75949A;
      color:${({theme})=> theme.color.yellow};
      text-shadow: 0px 0px 16px #00000090;
      cursor: pointer;
    }
  }
`;
