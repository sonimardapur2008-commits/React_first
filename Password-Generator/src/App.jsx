import { useState } from "react";

function App() {

  const [index, setIndex] = useState(0)

  const colors = ["red","yellow","blue","green","purple"]

  const changeColor = () => {
      setIndex((index) => 
        index = (index + 1)%5
    );
  }

  return (
    <>

      {/* <div className="w-full h-screen bg-black"></div>

      <div className="fixed bg-brown">

          <div className="flex justify-content px-5 py-2 ">
              <div className="w-40"
              style={{backgroundColor:"white"}}
              ></div>
              <button
              onClick={() => setColor("red")}
              style={{backgroundColor: color }}
              >copy</button>
          </div>
          <div className="">

          </div>

      </div> */}

          <button className="w-100 left-900"
          onClick={changeColor}
          style = {{backgroundColor: colors[index]}}
          >Click</button>


    </>
  );
}

export default App
