
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Featured from '../../components/Featured';
import ImageSlider from '../../components/ImageSlider';
import Loading from '../../components/Loading';
import Categories from '../../contextProviders/CategoriesProvider';
import { getGenres } from '../../services/resources/genres';
import { RootState } from '../../store';
import { getMoviesRequest } from '../../store-saga/ducks/movies/actions';
import { getPlayingMovies } from '../../store/movies.store';

import { HomeContainer } from './style';

export const Home: React.FC = () => {
  const movies = useSelector((state:RootState)=> state.playingMovies.movies)
  const dispatch = useDispatch()
  const { categories, setCategories } = useContext(Categories)


  const handleContext = async () => {
    const categoriesData = await getGenres()
    setCategories(categoriesData)
  }
  const dataHasBeenImported = () =>  (movies.length === 0 || categories.length === 0 ) ? false : true


  useEffect(()=>{
    if(movies.length === 0)
    setTimeout(()=>dispatch(getMoviesRequest()),1000)
    if(categories.length === 0)handleContext()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  return (
    <HomeContainer className={movies.length === 0? 'loading' : ''}>
      {dataHasBeenImported() ?  (
        <>
          <ImageSlider />
          <Featured />
        </>
      ): <Loading /> }

    </HomeContainer>
  );
}

