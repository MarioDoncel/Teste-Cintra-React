import api from "../api";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview:string;
  popularity: number;
  poster_path: string;
  release_date:string;
  title: string;
  video: boolean
  vote_average: number;
  vote_count: number;
}

export const getCurrentPlayingMovies = async ():Promise<IMovie[]> => {
  try {
    const response = await api.get(`now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1&region=BR`)
    const movies = response.data.results
    return movies
  } catch (error) {
    console.log(error)
    return []
  }
  
}
export const getMovieDetails = async (movieId:number):Promise<IMovie> => {
  const response = await api.get(`${movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`)
  const movie = response.data.results[0]
  return movie
}