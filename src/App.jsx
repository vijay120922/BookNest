import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AvailableBooksDashboard from './components/AvailableBooksDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AvailableBooksDashboard />
    </>
  )
}

export default App
