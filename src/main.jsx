import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { Router } from './Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}> <Router /></Provider>
   
  
)
