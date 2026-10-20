import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Mountain from './components/Mountain'



function App() {

   
 
  return (
    <>
      <h1 className="bg-green-400 text-black text-2xl rounded-xl p-4">Tailwind Test</h1>
      
      <Mountain channel="something" />

    </>
  )
}

export default App
