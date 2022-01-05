
import { useContext } from 'react';
import Featured from '../../components/Featured';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider';
import NewContext from '../../providers/NewContextProvider';
import { HomeContainer } from './style';

export const Home: React.FC = () => {
  const {user,setUser} = useContext(NewContext)

  const handleContext = () => {
    const newUser = {example: 'Mario'}
    setUser(newUser)
  }
 
  return (
    <HomeContainer>
      <ImageSlider/>  
      <Featured/>
    </HomeContainer>


  );
}

