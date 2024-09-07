import { useState } from 'react'
import './App.css'
import {Link, Routes, Route} from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container mx-auto min-h-screen">

          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
      </div>
  )
}

export default App
