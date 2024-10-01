import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Hero from "./pages/home/sections/Hero"
import Feature from './pages/home/sections/Feature'

function App() {
  const [count, setCount] = useState(0)

  const handleCount = ()=>{
    if(count===3){
      
    }
    setCount(count=>count+1)
  }

  return (
    <>
    {/* <Navbar />   */}
      {/* ---NavSection---- */}
      {/* ----Navbar ---- */}
      {/* ---Hero Section---- */}
      <Hero />
      <div className="container">
        <Feature />
      </div>
      {/* Feature SEction---- */}
      {/* Offerings ---- */}
    </>
  )
}

export default App
