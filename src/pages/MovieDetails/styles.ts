import styled from 'styled-components';
import { TMovieDetails } from '.';

export const MovieDetailsContainer = styled.div`
  padding: 1rem 0;
  color: #FFF;
  width: 90%;
  margin:  auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  position: relative;
  &::after{
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
    background-image:url(${(props:TMovieDetails)=> `https://image.tmdb.org/t/p/original/${props.bgURL}`});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .image{
    width: clamp(100px,20%,440px );
    img{
      width: 100%;
      object-fit:cover;
    }
  }
  .about{
    width: 60%;
    flex-direction: column;
    p{
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }
    h1,p{
      width: 100%;
    }
    h1{
      margin-bottom: 2rem;
    }
    span{
      color: ${({theme})=> theme.color.yellow};
    }
    small{
      color: ${({theme})=> theme.color.red};
      opacity: 0.8;
    }
    .overview{
      color: ${({theme})=> theme.color.yellow};
      font-size: 2rem;
      text-indent: 2rem;
    }
  }
  @media (max-width:900px) { 
      flex-direction: column;
      align-items: center;
      .image{
        width: 80%;
      } 
      .about{
        width: 100%;
      }
   }
`;
