import styled from 'styled-components';

export const SignHeaderContainer = styled.div`
  width: 50vw;
  margin-bottom: 1rem;
  span{
    color: ${({theme})=> theme.color.blue};
  }
  @media (max-width: 600px){
    width: 60vw;
  }
`;
