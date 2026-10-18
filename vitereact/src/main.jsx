import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return(
//         <>
//         <div>
//             <h1>Custom App</h1>
//         </div>

//         </>
//     )
// }

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://flipkart.com',
        target: '_blank'
    },
    children: "Click here to go on flipkart"
}

createRoot(document.getElementById('root')).
render(
    ReactElement
)
