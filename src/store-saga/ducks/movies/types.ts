
// REDUX SAGA

import { IMovie } from "../../../services/resources/movies";

export enum MoviesTypes {
  GETMOVIES_REQUEST = '@movies/GETMOVIES_REQUEST',
  GETMOVIES_SUCCESS = '@movies/GETMOVIES_SUCCESS',
  GETMOVIES_FAILURE = '@movies/GETMOVIES_FAILURE'
}


// TYPESCRIPT

export interface IMovieState {
  readonly movies:IMovie[]
  readonly loading:boolean
  readonly error:boolean
}