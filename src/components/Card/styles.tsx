import styled from 'styled-components';

export const CardContainer = styled.div`
padding: 0.5rem 0;
  background-color: #FFF;
  border-radius: 10px;
  width: 18rem;
  height: 24rem;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({theme})=>theme.color.black};
  font-size: 0.9rem;

  .img{
    width: 10rem;
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
      span{
        font-weight: bold;
        &.released{
          color:${({theme})=>theme.color.green};
        }
        &.notReleased{
          color:${({theme})=>theme.color.red};
        }
      }
  }
  .resume{
    width: 90%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-indent: 1rem;

  }
`;
