import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Index from './pages/Index';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>

    </div>
  )
}

export default App