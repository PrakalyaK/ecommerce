import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'
import Checkout from './components/Checkout.jsx'
import {BrowserRouter,Routes,Route} from 'react-router'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <>
        <Header/>
        <HomePage/>
        </>
      }/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
