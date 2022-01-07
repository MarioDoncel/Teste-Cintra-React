import styled from 'styled-components';

export const NavLinksContainer = styled.div`
  gap: 2rem;

  a{
    color: white;
    gap: 0.5rem;
    transition: 400ms;
    &:hover:not(:last-child){
      animation: 400ms ease vibrate ;
    }
    &:last-child{
      padding: 0.8rem 0.6rem;
      background-color: ${({theme})=> theme.color.green};
      border-radius: 10px;
      
      &:hover{
        background-color: ${({theme})=>theme.color.greenHover};
        text-shadow: 0px 0px 3px rgba(0,0,0,0.2);
        color: black;
      }
    }
    &.onPage{
     
      text-shadow: 0px 0px 10px #FFFFFF;
    }
  }

  @keyframes vibrate {
    0%{
      transform: rotate(8deg);
    }
    20%{
      transform: rotate(-8deg);
    }
    40%{
      transform: rotate(8deg);
    }
    60%{
      transform: rotate(-8deg);
    }
    80%{
      transform: rotate(8deg);
    }
    100%{
      transform: rotate(0deg);
    }
  }
`;
