import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AvailableBooksDashboard from './components/AvailableBooksDashboard'
import ManageBooksPage from './components/ManageBooksPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AvailableBooksDashboard />
    {/* <ManageBooksPage/> */}
    </>
  )
}

export default App
