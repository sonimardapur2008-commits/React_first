import './App.css'
import { useState } from 'react'

function App() {

  const arr = ['you clicked me', "don't click me again and again", "i am warning you", "don't you have any work"]

  const [search, setSearch] = useState("")
  const [clicked, setClicked] = useState(false)

  

  return (
    <>
    <div className='flex flex-col gap-50'> 
      <div className="flex justify-center w-full h-13 bg-red-500 ">
          <div className='flex justify-cenetr gap-5 mb-2 mt-2'>
                <input
                placeholder='Enter here'
                className='bg-yellow-500 rounded-full mx-5 px-5'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                ></input>
                <button 
                onClick={() => setClicked(!clicked)}
                className={`w-20 rounded-full
                ${clicked ? "bg-green-500" : "bg-yellow-500"}
                `}
                >Click Me</button>
                <div className='w-auto h-9 bg-yellow-500 px-5 pt-1.9 rounded-full'>
                  {search}
                </div>
          </div>
      </div>



      <div className='flex justify-center'>
        <div className='w-50 h-50 bg-gray-500'>
                
        </div>
      </div>

    </div> 

    </>
  )
}

export default App
