import { useState } from 'react'


function App() {


  let [counter, setCounter] = useState(15)


  const addValue = () => {
    if(counter<20) counter = counter +1
    setCounter(counter)
  }
  const subValue = () => {
    if(counter>0) counter = counter -1;
    setCounter(counter)
  }

  return (

    <>
      
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={subValue}
      >Remove value</button>
    </>
  )
}

export default App
