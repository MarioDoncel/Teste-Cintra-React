import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IUser {
  username:string
  email:string
  id:string
}

interface IUserState {
  user:IUser
  
}

const initialState: IUserState = {
  user: {
    username:'',
    email:'',
    id:''
  },
  
}

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
      return state
    },
    logout: (state) => {
      state.user = {
        email: '',
        id: '',
        username:''
      }
      return state
    }

  },
})

export const {logUser, logout} = userSlice.actions

export default userSlice.reducer
