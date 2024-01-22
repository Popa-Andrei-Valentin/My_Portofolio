import { useState } from 'react'
import Jumbotron from "./components/Jumbotron/Jumbotron.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="root-content">
            <Jumbotron />
        </div>
    </>
  )
}

export default App
