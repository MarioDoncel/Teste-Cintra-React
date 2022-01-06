import styled from 'styled-components';

export const LoadingContainer = styled.div`
  width: 100%;
  height: inherit;
  font-size: 10rem;
  flex-direction: column;
  gap: 2rem;
  
  svg{

    animation: 1.5s linear infinite loadingRotate ;
  }
  p{
    animation: 1.5s linear infinite opacity ;
    font-size: 2rem;
    color: #fff;
  }
  @keyframes opacity{
    0%{
      opacity: 1;
    }
    50%{
     opacity: 0.5;
    }
    100%{
     opacity: 1;
    }
  }


  @keyframes loadingRotate {
    0%{
      transform: rotate(0);
      color:#fff
    }
    25%{
      transform: rotate(90deg);
    }
    50%{
      transform: rotate(180deg);
      color:${({theme})=>theme.color.yellow};
    }
    
    
    75%{
      transform: rotate(270deg);
      
    }
    
    100%{
      transform: rotate(360deg);
      color:#fff
    }
  }
`;
