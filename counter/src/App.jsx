import { useState } from 'react'

function App() {
    let [counter, setCounter] = useState(0)
    const addValue = () => {
        setCounter(counter+1);
        setCounter(counter+1);
    }

    const removeValue = () => {
        setCounter(counter => counter+1);
        setCounter(counter => counter+1);
        setCounter(counter+1);
    }

    return(
    <>
        <h1>Chai aur Code</h1>
        <h2>Counter value is {counter}</h2>
        <button
        onClick={addValue}
        >add value {counter}</button>
        <br />
        <button
        onClick={removeValue}
        >remove value {counter}</button>

        <br />
        <p>counter = {counter}</p>
    </>
    )
}

export default App
