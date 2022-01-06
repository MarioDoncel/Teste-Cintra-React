/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, AppThunk } from '.'
import { getCurrentPlayingMovies, IMovie } from '../services/resources/movies'

export const getPlayingMovies = createAsyncThunk(
  'playingMovies/getPlayingMovies',async () => {
    const result = await getCurrentPlayingMovies()
    return result
  }
)

interface IMoviesState {
  movies:IMovie[]
  status:string | null
}

const initialState: IMoviesState = {
  movies: [],
  status: null
}

const playingMoviesSlice = createSlice({
  name: 'playingMovies',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getPlayingMovies.pending, (state, action) =>{
      state.status = "loading"
    }),
    builder.addCase(getPlayingMovies.fulfilled, (state, action) =>{
      state.status = "success";
      state.movies = action.payload;
    }),
    builder.addCase(getPlayingMovies.rejected, (state, action) =>{
      state.status = "failed"
    })
  },
})



export default playingMoviesSlice.reducer



// export function asyncPopulatePlayingMovies():AppThunk{
//   return async function dispatch(dispatch:AppDispatch) {
//     const movies:IMovie[] = await getCurrentPlayingMovies()
//     if(movies) dispatch(populatePlayingMovies(movies))
//   }
// }



