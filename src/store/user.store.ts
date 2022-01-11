import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface IUser {
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
    }
  },
})

export const {logUser} = userSlice.actions

export default userSlice.reducer
