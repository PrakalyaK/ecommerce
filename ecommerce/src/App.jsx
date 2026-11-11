import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import HomePage from './components/HomePage.jsx'

function App() {

  return (
    <>
     <Header/>
     <HomePage/>
    </>
  )
}

export default App
