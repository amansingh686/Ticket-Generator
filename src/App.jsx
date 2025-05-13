import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Ticket from './pages/Ticket'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ticket" element={<Ticket />} />
    </Routes>
  )
}

export default App
