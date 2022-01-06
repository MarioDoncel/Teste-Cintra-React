import styled from 'styled-components';

export const CardContainer = styled.div`
  cursor: pointer;
  padding: 0.5rem 0;
  background-color: #FFF;
  border-radius: 10px;
  width: 15rem;
  height: 22rem;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  color: ${({theme})=>theme.color.black};
  font-size: 0.9rem;

  .header{
    flex-direction: column;
    max-width: 90%;
    height: 270px;
  }

  .img{
    width: 8rem;
    img{
      width: 100%;
    }
  }
  h4{
    width: 90%;
    text-align: center;
  }
  .releaseDate{
    max-width: 80%;
    background-color: ${({theme})=>theme.color.black};
    color: #FFF;
    padding: 4px 8px;
    border-radius: 10px;
      span{
        font-weight: bold;
        color: ${({theme})=>theme.color.yellow};
      }
  }
  .resume{
    font-size: 0.8em;
    width: 90%;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-indent: 1rem;

  }
`;
