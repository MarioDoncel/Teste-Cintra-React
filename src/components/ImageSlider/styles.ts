import styled from 'styled-components';

export const ImageSliderContainer = styled.div`
    .swiper-button-prev,.swiper-button-next{
      color: #fff;
      transition: 300ms ease;
      &:hover{
        text-shadow: initial;
      }
    }
    .swiper-button-prev{
      text-shadow:  2px 2px 4px rgba(0,0,0,0.4);
    }
    .swiper-button-next{
      text-shadow: -2px 1px 6px rgba(0,0,0,0.4);
    }
    .swiper {
        width: 90%;
        padding-bottom: 50px;
        height: 275px;
      }

      .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
        width: 100%;
        margin-right: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 90%;
        }
      }

     
      .swiper-pagination{
        top: 6px;
        height: 15px;
      }
`;
