/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { IMovie } from '../../services/resources/movies';
import { RootState } from '../../store';
import { getPlayingMovies } from '../../store/movies.store';


import { MovieDetailsContainer } from './styles';



export const MovieDetails: React.FC = () => {
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
  <MovieDetailsContainer>
    {!currentMovie ? <Loading/>: (
      <>
        <div className="image flex-center">
        <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} alt="Image About" />
      </div>
      <div className="about flex-center">
        <h1>King's Man: A Origem</h1>
        <p className='releaseDate'>Lançamento: <span>15/03/2022</span></p>
        <p className='rate'> Avaliação: <span>8.4/10 </span><small>{'(8842 votos)'}</small></p>
        <p> Sinopse:</p>
        <p className='overview'>Quando uma série dos piores tiranos e gênios do crime da história se juntam para criar uma guerra que aniquilará milhões, um homem e seu pupilo precisam correr contra o tempo para pará-los.</p>
      </div>
    </>
    )}
    
      
  </MovieDetailsContainer>
  );
}

