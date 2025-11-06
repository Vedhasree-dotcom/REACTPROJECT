import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Home from './Components/PAGES/Home';
import About from './Components/PAGES/About';
import Contact from './Components/PAGES/Contact';
import Services from './Components/PAGES/Services';
import Bridal from './Components/PAGES/Bridal';
import AppointmentForm from './Components/PAGES/AppointmentForm';
import BookingSummary from './Components/PAGES/BookingSummary';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Footer from './Components/Footer';
import Register from './Components/Register';
import { ThemeProvider } from './ThemeContext';

function AppContent() {
  const location = useLocation();

  const hideLayoutRoutes = ['/login', '/register','/book'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/bridal' element={<Bridal/>}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/book' element={<AppointmentForm />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/profile' element={<Profile />} />
        <Route path="/summary" element={<BookingSummary />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
    </ThemeProvider>
  );
}

export default App;
