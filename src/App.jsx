import React from 'react';
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Player from './pages/Player';
import Score from './pages/Score';
import Home from './pages/Home'
import Footer from './components/footer'


function App() {


  return (

    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Player' element={<Player />} />
            <Route path='/Score' element={<Score />} />
          </Routes>

        </main>
        <Footer />

      </div>




    </BrowserRouter>

  )
}

export default App
