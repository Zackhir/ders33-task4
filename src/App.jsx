import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Components/Hello'
import Welcome from './Components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hello></Hello>

     <Welcome></Welcome>
    </>
  )
}

export default App
