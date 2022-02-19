import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'


import { TodoPage } from './pages/TodoPage'
import { AboutPage } from './pages/AboutPage'

function App() {


  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<TodoPage />} />
        </Routes>
    </>

  )
}

export default App;
