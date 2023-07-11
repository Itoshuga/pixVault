import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
				<Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
