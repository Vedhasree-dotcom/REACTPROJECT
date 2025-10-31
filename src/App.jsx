import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Home from './Components/PAGES/Home';
import About from './Components/PAGES/About';
import Contact from './Components/PAGES/Contact';
import Services from './Components/PAGES/Services';
import AppointmentForm from './Components/PAGES/AppointmentForm';
import BookingSummary from './Components/PAGES/BookingSummary';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Register from './Components/Register';

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/book' element={<AppointmentForm/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/" element={<AppointmentForm />} />
        <Route path="/summary" element={<BookingSummary />} />
        


      </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
