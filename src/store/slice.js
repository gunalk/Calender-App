import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:{
    name:"gunal",
    email:"kgunal89@gmail.com",
    number:9080263815
  },
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login:(state,action)=>{
        state.user=action.payload
    },
    logout:(state)=>{
        state.user=null
    }
  },
})


export const {login,logout } = counterSlice.actions

export default counterSlice.reducer