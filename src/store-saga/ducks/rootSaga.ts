import { all, takeLatest } from 'redux-saga/effects'
import { getMovies } from './movies/sagas'
import { MoviesTypes } from './movies/types'

export default function* rootSaga():Generator{
  return yield all([
    takeLatest(MoviesTypes.GETMOVIES_REQUEST, getMovies)
  ])
}
