import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Mountain from './components/Mountain'

const arr = ["Soni", "Moni", "Devarsh"]
const arr2 = ["Devarsh", "Moni", "Soni"]

const pp="For fun";
const p2="Same";

function App() {

   
 
  return (
    <>
      <h1 className="bg-green-400 text-black text-2xl rounded-xl p-4">Tailwind Test</h1>
      <div className="flex">
        <Mountain channel={arr}  Adventure={pp}/>
        <Mountain channel={arr2}/>
      </div>

    </>
  )
}

export default App
