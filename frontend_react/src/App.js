import React from 'react';

import { About, Footer, Skills, Testomonial, Header, Work } from './container'
import { Navbar } from './components/Navbar';
import './App.scss'

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testomonial />
      <Footer />

    </div>
  )
}

export default App;