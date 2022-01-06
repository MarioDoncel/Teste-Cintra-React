import { apiGenres } from "../api";

export interface IGenre {
  name: boolean;
  id: string;
}

export const getGenres = async ():Promise<IGenre[]> => {
  try {
    const response = await apiGenres.get(`?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
    const movies = response.data.results
    return movies
  } catch (error) {
    console.log(error)
    return []
  }
  
}
