
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Featured from '../../components/Featured';
import ImageSlider from '../../components/ImageSlider';
import Loading from '../../components/Loading';
import Categories from '../../contextProviders/CategoriesProvider';
import { getGenres } from '../../services/resources/genres';
import { RootState, useAppDispatch } from '../../store';
import { getPlayingMovies } from '../../store/movies.store';

import { HomeContainer } from './style';

export const Home: React.FC = () => {
  const movies = useSelector((state:RootState)=> state.playingMovies.movies)
  const user = useSelector((state:RootState)=> state.currentUser.user)
  const dispatch = useAppDispatch()
  const { categories, setCategories } = useContext(Categories)


  const handleContext = async () => {
    const categoriesData = await getGenres()
    setCategories(categoriesData)
  }
  const dataHasBeenImported = () =>  (movies.length === 0 || categories.length === 0 ) ? false : true


  useEffect(()=>{
    console.log(user)
    if(movies.length === 0)
    //set timeout to show loading effect
    setTimeout(()=>dispatch(getPlayingMovies()),1000)
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

