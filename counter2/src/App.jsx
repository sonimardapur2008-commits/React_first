import { useState } from 'react'
import './App.css'

function App() {

    const [counter, setCounter] = useState(0);

    const add = () => {
      setCounter(counter+1);
    }

  return (
    <>
      

       <div className="w-full h-screen flex justify-center items-center">
         <div className="w-80 h-30 bg-gray-500 rounded-2xl flex flex-col justify-center items-center gap-5">
            <h1 className="">Counter : {counter}</h1>
            <button 
            className="h-10 w-20 bg-red-500 rounded-full"
            onClick = {() => setCounter(counter+1)}


            >Increment</button>
          </div>
       </div>


    </>
  )
}

export default App
