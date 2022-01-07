import styled from 'styled-components';

export const FooterContainer = styled.footer`
  
  height: 100px;
  margin-top: auto;
  background-color: ${({theme})=>theme.color.black};
  font-size: 14px;
  color: #FFF;
  .container{
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .developedBy{
    gap: 0.5rem;
  }

  @media(max-width:600px){
    .container{
      font-size: 1.2rem;
      gap: 0.5rem;
    }
    .rights{
      text-align:center;
    }
    .developedBy{
      flex-direction: column;
      text-align: center;
      >div{
        width: 40px;
        height: 36px;
      }
    }
}
`;
