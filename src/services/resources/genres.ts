import { apiGenres } from "../api";

export interface IGenre {
  name: string;
  id: number;
}

export const getGenres = async ():Promise<IGenre[]> => {
  try {
    const response = await apiGenres.get(`list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
    const movies = response.data.genres
    return movies
  } catch (error) {
    console.log(error)
    return []
  }
  
}
