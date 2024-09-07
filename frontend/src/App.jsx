import { useState } from 'react'
import './App.css'
import {Link, Routes, Route} from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Nav from "./components/Nav";
function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container mx-auto min-h-screen">
          <Nav/>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
          </Routes>
          <ToastContainer />
      </div>
  )
}

export default App
