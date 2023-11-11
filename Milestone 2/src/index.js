import React from 'react'
import ReactDOM from 'react-dom/client'

import { ShopContextProvider } from './context/ShopContext'

import { App } from './App'

import './global.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
)
