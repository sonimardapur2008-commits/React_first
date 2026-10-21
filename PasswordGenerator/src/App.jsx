import { useState,useCallback, useEffect, useRef} from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState(" ")

  //ref Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str="qwertyuioplkjhgfdaszxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ"

    if(numAllow) str += "6123457890";
    if(charAllow) str += "~`!@#$%&*(){}:';-=_+,./?";

    for(let i=1;i<= length ;i++){
        let char = Math.floor(Math.random()*str.length +1)
        pass += str.charAt(char)
    }

    setPassword(pass)


  }, [length, numAllow, charAllow, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>

        <div className="flex flex-col gap-5 w-full max-w-md mx-auto text-yellow-500 bg-gray-800 px-10 py-5 mt-35">
          
            <h1 className="text-2xl text-center text-white pt-1">Password Generator</h1>

            <div className="flex pl-5 gap-0 text-black bg-white h-8 rounded-2xl">
              <input 
              type="text"
              placeholder='Password'
              value={password}
              className=' outline-none flex-1 min-w-0 py-1 px-3'
              readOnly
              ref={passwordRef}
              />
              <button 
              onClick={copyPasswordToClipboard}
              className="ml-auto bg-blue-500 w-15 px-3 py-1 rounded-2xl shrink-0">copy</button>
            </div>

            <div className="flex text-sm gap-x-1">
              <div className="flex items-center gap-x-1">
              <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursore-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />

              <label>Length: {length}</label>
                
              </div>

              <div className="flex items-center gap-x-1">
                <input
                type="checkbox"
                defaultChecked={numAllow}
                id="numInput"
                onChange={() => {
                  setNumAllow((prev) => !(prev))
                }}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
                <div className="flex items-center gap-x-1">
                <input
                type="checkbox"
                defaultChecked={charAllow}
                id="charInput"
                onChange={() => {
                  setCharAllow((prev) => !(prev))
                }}
                />
                <label htmlFor="charInput">Characters</label>


                </div>

            </div>

        </div>


    </>
  )
}

export default App
