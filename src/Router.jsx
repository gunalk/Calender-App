import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Pages/Login/Login'
import Booking from './Pages/Booking/Booking'
import { useDispatch, useSelector } from 'react-redux'

export const Router = () => {
  const user=useSelector(state=>state.user.user)

  return (
    <div>
      <BrowserRouter>
   
    <Routes>
      
      
      <Route path="/" element={<Login/>}/>
      <Route path="/booking" element={<Booking/>}/>
      
    </Routes>
  
   </BrowserRouter>
    </div>
  )
}
