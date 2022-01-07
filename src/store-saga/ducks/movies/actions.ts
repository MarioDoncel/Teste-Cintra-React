import {action} from 'typesafe-actions'
import { IMovie } from '../../../services/resources/movies'
import { MoviesTypes } from './types'

export const getMoviesRequest = () => action(MoviesTypes.GETMOVIES_REQUEST)

export const getMoviesSuccess = (movies:IMovie[]) => action(MoviesTypes.GETMOVIES_SUCCESS, {movies})

export const getMoviesFailure = () => action(MoviesTypes.GETMOVIES_FAILURE)
