import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem 0;
  background-color: ${({theme})=>theme.color.black};
  .container{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .user{
    color: ${({theme})=> theme.color.yellow};
  }
  
  @media(max-width:500px){
    .user{
      display: none;
    }
  }

`;
