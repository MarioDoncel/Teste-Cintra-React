import styled from 'styled-components';

export const FooterContainer = styled.div`
  
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
`;
