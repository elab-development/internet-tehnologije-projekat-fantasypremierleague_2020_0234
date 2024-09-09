import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Nav from "./components/Nav";
import CreateTeam from "./pages/CreateTeam.jsx";
import Home from "./pages/Home.jsx";
import Protected from "./Protected.jsx";
import Standings from "./pages/Standings.jsx";
import ActivateRound from "./pages/ActivateRound.jsx";
import Footer from "./components/Footer.jsx";
import EnterStats from "./pages/EnterStats.jsx";
import CurrentFixture from "./pages/CurrentFixture.jsx";
function App() {

  return (
      <div className="min-h-screen flex flex-col justify-between">
          <div className="container mx-auto">
              <Nav/>
              <Routes>

                  <Route element={<Protected/>}>
                      <Route path="/create-team" element={<CreateTeam/>}/>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/standings" element={<Standings/>}/>
                      <Route path="/current" element={<CurrentFixture/>}/>
                      <Route path="/round-settings" element={<ActivateRound/>}/>
                      <Route path="/stats" element={<EnterStats/>}/>
                  </Route>

                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
              </Routes>
              <ToastContainer/>
          </div>
          <Footer/>

      </div>
  )
}

export default App
