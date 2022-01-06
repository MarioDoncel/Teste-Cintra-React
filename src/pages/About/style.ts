import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 1rem 0;
  color: ${({theme})=> theme.color.yellow};
  width: 90%;
  margin:  auto;
  display: flex;
  gap: 2rem;
  .image{
    width: clamp(100px,40%,440px );
    img{
      width: 100%;
      object-fit:cover;
    }
  }
  .about{
    width: 60%;
    flex-direction: column;
    p{
      width: 100%;
      
    }
  }
  @media (max-width:900px) { 
      flex-direction: column;
      align-items: center;
      .image, .about{
        width: 100%;
      }
   }
`;
