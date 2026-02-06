import { useState } from 'react'
import './App.css'
import AthletesList from "./components/AthletesList"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <AthletesList />
    </div>
  )
}

export default App
