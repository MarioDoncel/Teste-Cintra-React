import styled from 'styled-components';

export const NavLinksContainer = styled.div`
  gap: 2rem;

  a{
    color: white;
    gap: 0.5rem;
    transition: 400ms;
    &:last-child{
      padding: 0.8rem 0.6rem;
      background-color: ${({theme})=> theme.color.green};
      border-radius: 10px;
      
      &:hover{
        background-color: ${({theme})=>theme.color.greenHover};
        text-shadow: 0px 0px 10px #FFFFFF;
        color: #eeeeee
      }
    }
    &.onPage{
      text-decoration: underline;
      text-shadow: 0px 0px 10px #FFFFFF;
    }
  }
`;
