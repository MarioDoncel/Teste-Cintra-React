import React from 'react';
import { ImageSliderContainer } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper";
import 'swiper/css/bundle'
// swiper core styles
import 'swiper/css'
// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Pagination, EffectCoverflow,Navigation, Autoplay]);

const ImageSlider: React.FC = () => {
  const movies = useSelector((state:RootState)=> state.playingMovies.movies)
  const baseImageUrl = 'https://image.tmdb.org/t/p/original'
  
  
  return (
    <ImageSliderContainer>
      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        autoplay={true}
        
      >
        {movies.map(movie=>(
          <SwiperSlide key={movie.id}>
            <Link to={`movies/${movie.id}`} className='flex-center'>
              <img src={`${baseImageUrl}${movie.backdrop_path}`} alt="img" />
              <h2>{movie.title}</h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderContainer>
    )
}

export default ImageSlider;