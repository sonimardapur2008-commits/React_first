import { useState } from 'react'

function App() {
    let [counter, setCounter] = useState(0)
    const addValue = () => {
        // counter =counter + 1;
        // setCounter(counter);
        setCounter(counter+1);
    }

    const removeValue = () => {
        setCounter(counter-1);
    }

    return(
    <>
        <h1>Chai aur Code</h1>
        <h2>Counter value is {counter}</h2>
        <button
        onClick={addValue}
        >add value</button>
        <br />
        <button
        onClick={removeValue}
        >remove value</button>
    </>
    )
}

export default App
