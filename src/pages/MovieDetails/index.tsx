/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { IMovie } from '../../services/resources/movies';
import { RootState } from '../../store';
import { getPlayingMovies } from '../../store/movies.store';
import { formatDate } from '../../utils/formatDate';


import { MovieDetailsContainer } from './styles';


export type TMovieDetails ={
  bgURL?:string
}
export const MovieDetails = ({bgURL}:TMovieDetails) => {
  const dispatch = useDispatch()
  const [currentMovie, setCurrentMovie] = useState<IMovie>()
  const movies = useSelector((state:RootState)=>state.playingMovies.movies)
  const {id} = useParams()
  
  useEffect(()=>{
    if(movies.length === 0)
    dispatch(getPlayingMovies())
    if(!currentMovie){
      const movie = movies.find(movie=>  movie.id === Number(id))
      setCurrentMovie(movie)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[movies])

  return (
  <MovieDetailsContainer bgURL={currentMovie?.backdrop_path}>
    {!currentMovie ? <Loading/>: (
      <>
        <div className="image flex-center">
        <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} alt={currentMovie.title} />
      </div>
      <div className="about flex-center">
        <h1>{currentMovie.title}</h1>
        <p className='releaseDate'>Lançamento: <span>{formatDate(currentMovie.release_date) }</span></p>
        <p className='rate'> Avaliação: <span>{`${currentMovie.vote_average}/10`}</span><small>{` (${currentMovie.vote_count} votos)`}</small></p>
        <p> Sinopse:</p>
        <p className='overview'>{currentMovie.overview}</p>
      </div>
    </>
    )}
    
      
  </MovieDetailsContainer>
  );
}

