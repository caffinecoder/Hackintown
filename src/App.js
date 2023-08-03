import React from 'react'
import Navbar from './componenets/navbar/Navbar'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Influencer from './pages/Influencer'
import Footer from './componenets/footer/Footer'


export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/influencer' element={<Influencer/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
} 

