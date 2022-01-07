import { call, put, takeEvery } from 'redux-saga/effects'
import { getCurrentPlayingMovies, IMovie } from '../../../services/resources/movies';
import { getMoviesFailure, getMoviesSuccess } from './actions';
import { MoviesTypes } from './types';

export function* getMovies() {
  try {
     const movies:IMovie[] = yield call(getCurrentPlayingMovies);
     yield put(getMoviesSuccess(movies));
  } catch (e) {
     yield put(getMoviesFailure());
  }
}

function* mySaga() {
  yield takeEvery(MoviesTypes.GETMOVIES_REQUEST, getMovies);
}

export default mySaga