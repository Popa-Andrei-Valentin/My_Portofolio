import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Jumbotron from "./components/Jumbotron/Jumbotron.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jumbotron />
    </>
  )
}

export default App
