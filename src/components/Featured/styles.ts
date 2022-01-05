import styled from 'styled-components';

export const FeaturedContainer = styled.div`
    margin-top: 0.5rem;
    color: ${({theme})=> theme.color.yellow};
    flex-direction: column;
    gap: 1rem;
    .categoryNavigation{
      width: 90%;
      display: flex;
      justify-content: space-around;
    }
    .cards{
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 90%;
      gap: 1rem;
      flex-wrap:wrap;
    }
`;
