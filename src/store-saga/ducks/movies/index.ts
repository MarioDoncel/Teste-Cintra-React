import { Reducer } from "redux";
import { IMovieState, MoviesTypes } from "./types";

const INITIAL_STATE:IMovieState = {
  movies: [],
  loading: true,
  error: false
}

const reducer: Reducer<IMovieState> = (state = INITIAL_STATE, action)=>{
  switch (action.type) {
    case MoviesTypes.GETMOVIES_REQUEST:
      return {...state}

    case MoviesTypes.GETMOVIES_SUCCESS:
      return {movies: action.payload.movies, loading:false, error:false }

    case MoviesTypes.GETMOVIES_FAILURE:
      return {...state, loading:false, error:true};

    default:
      return state;
  }
}

export default reducer