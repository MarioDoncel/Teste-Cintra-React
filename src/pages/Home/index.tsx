
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Featured from '../../components/Featured';
import ImageSlider from '../../components/ImageSlider';
import Loading from '../../components/Loading';
import { RootState } from '../../store';
import { getPlayingMovies } from '../../store/movies.store';
// import NewContext from '../../providers/NewContextProvider';
import { HomeContainer } from './style';

export const Home: React.FC = () => {
  const movies = useSelector((state:RootState)=> state.playingMovies.movies)
  const dispatch = useDispatch()
  // const { user, setUser } = useContext(NewContext)


  // const handleContext = () => {
  //   const newUser = { example: 'Mario' }
  //   setUser(newUser)
  // }
  useEffect(()=>{
    if(movies.length === 0)
    dispatch(getPlayingMovies())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <HomeContainer className={movies.length === 0? 'loading' : ''}>
      {movies.length === 0 ? <Loading /> : (
        <>
          <ImageSlider />
          <Featured />
        </>
      )}

    </HomeContainer>
  );
}

