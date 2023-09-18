import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Login.css"
import { login } from '../../store/slice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail]=useState("");
  const [name,setName]=useState('')
  const [number,setNumber]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleClick=(e)=>{
    e.preventDefault()
    if(name==="" ){
      alert("please enter valid name")
    }

   
      else if(email===""|| ! email.includes("@") || ! email.includes(".com") ){
      alert("please enter valid Email")
    }  

        else if(number==="" || number.length >10 || number.length <  10 ){
      alert("please enter valid Contact Number")
    }  
    
    else{dispatch(login({name:name,number:number,email:email}))
   
       navigate("/booking")
    
        }
  }

  return (
    <div className="loginScreen">
    <div className='signInScreen'>
      <form>
        <h1>Login In Page</h1>
        <input  placeholder='Name' onChange={(e)=>setName(e.target.value)}  type="text" />
        <input placeholder='Email'onChange={(e)=>setEmail(e.target.value)} type="email" />
        
        <input  placeholder='number' onChange={(e)=>setNumber(e.target.value)}  type="number" />
        <button type="submit" onClick={handleClick} >Sign In</button>
        
      </form>
    </div>
    </div>
  )
}

export default Login