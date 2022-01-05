import React from 'react';

import { ImageSliderContainer } from './styles';

// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";


import 'swiper/css/bundle'

// swiper core styles
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Pagination, EffectCoverflow,Navigation]);

const ImageSlider: React.FC = () => {

  const photo1 = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  const photos = [photo1,photo1,photo1,photo1,photo1]
  
     return (
        <ImageSliderContainer>
         <Swiper
            spaceBetween={150}
            slidesPerView={1}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
            loop={true}
            
            
          >
            {photos.map(img=>(
              <SwiperSlide key={img}><img src={img} alt="img" /></SwiperSlide>
            ))}
          </Swiper>
       </ImageSliderContainer>
    )
}

export default ImageSlider;