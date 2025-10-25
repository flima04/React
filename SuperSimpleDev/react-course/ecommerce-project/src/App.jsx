//import { useState } from 'react'
import { HomePage } from './pages/homepage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Routes, Route } from 'react-router';
import './App.css';


function App() {
  //const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='checkout' element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
