
import React,{createContext,useState} from 'react';
import { IGenre } from '../../services/resources/genres';

type PropsCategoryContext = {
    categories: IGenre[],
    setCategories: React.Dispatch<React.SetStateAction<IGenre[]>>
}
const DEFAULT_VALUE:PropsCategoryContext = {
    categories: [],
    setCategories: () => {}
}

const Categories = createContext<PropsCategoryContext>(DEFAULT_VALUE)

const CategoriesProvider:React.FC = ({children}) => {
    const [categories, setCategories] = useState(DEFAULT_VALUE.categories)

  return (
      <Categories.Provider value={{categories,setCategories}}>
          {children}
      </Categories.Provider>
  );
}

export default Categories;

export {CategoriesProvider}
