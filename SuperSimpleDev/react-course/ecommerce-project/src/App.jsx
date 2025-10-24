//import { useState } from 'react'
import { HomePage } from './pages/homepage'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='checkout' element={<div>Testando</div>} />
    </Routes>
  )
}

export default App
