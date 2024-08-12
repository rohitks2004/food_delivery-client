import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { useState } from 'react'
import LoginSignup from './components/LoginSignup'
import Menu from './components/Menu'
import Cart from './components/Cart'
import ScrollToAnchor from './components/ScrollToAnchor'
/* eslint-disable react/prop-types */
function App() {
  const[ showLoginSignup , setShowLoginSignup] = useState(false);

  return (
    <>
    <div>
    {showLoginSignup &&
      <LoginSignup setShowLoginSignup={setShowLoginSignup} />
    }
    </div>
    <div className={"app "+(showLoginSignup && 'showloginsignup')}>
      <Header className={(showLoginSignup && 'showloginsignup')} setShowLoginSignup={setShowLoginSignup}/>
        <ScrollToAnchor/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} /> 
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
