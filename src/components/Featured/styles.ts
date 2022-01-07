import styled from 'styled-components';

export const FeaturedContainer = styled.div`
    margin-top: 0.5rem;
    color: ${({theme})=> theme.color.yellow};
    flex-direction: column;
    gap: 1rem;
    .categoryNavigation{
      width: 90%;
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
      span{
        cursor: pointer;
        transition: 400ms;
        &.selected{
         padding: 4px 6px;
         background-color: white;
         color: ${({theme})=> theme.color.black};;
         border-radius: 10px;
         font-weight: bold;
        }
      }
    }
    .cards{
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 90%;
      gap: 1rem;
      flex-wrap:wrap;
    }
    .pagination{
      display: flex;
      gap: 1rem;
      li{
        width: 30px;
        height: 30px;
        background-color: ${({theme})=> theme.color.black};
        color: ${({theme})=> theme.color.blue};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: bold;
        &.selected{
          color: ${({theme})=> theme.color.yellow};
        }
        a{
          cursor: pointer;
        }
      }
    }

`;
