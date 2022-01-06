import React from 'react';
import { formatDate } from '../../utils/formatDate';

import { CardContainer } from './styles';

interface ICard {
  title: string
  release_date: string
  overview: string
  poster_path: string
  id: number
  onclick:(id:number)=>void
}



const Card = ( {title, release_date, overview, poster_path, id, onclick}:ICard ) => {

  return (
    <CardContainer className='flex-center' onClick={()=>onclick(id)}>
      <div className="header flex-center">
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt="img" />
        </div>
        <h4>{title}</h4>
      </div>
      
      <p className='releaseDate'>Lançamento - <span>{formatDate(release_date)}</span></p>
      <p className='resume'>
        {overview}
      </p>
    </CardContainer>
  );
}

export default Card;