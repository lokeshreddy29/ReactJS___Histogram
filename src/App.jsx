import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Histogram from './Histogram'

function App() {
  const [count, setCount] = useState(0)
  const [characterCount, setCharacterCount] = useState(Array(26).fill(0))

  return (
    <>
      <h1 className="m-2">Histogram</h1>
      <div className="h-100 w-300 border border-white grid grid-cols-26 content-end p-2">
        <Histogram count={10} />
        <Histogram count={20} />
      </div>
    </>
  )
}

export default App
