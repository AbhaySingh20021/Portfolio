import React from 'react'

import About from './container/About/About'
import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Skills from './container/Skills/Skills'
import Test from './container/Testomonials/Test'
import Work from './container/Work/Work'
import Nav from './components/Navbar/Nav'

import './App.scss'


const App = () => {
  return (
    <div className='app'>
    <Nav />
    <Header />
    <About />
    <Work />
    <Skills />
    <Test />
    <Footer />


    </div>

   
  )
}

export default App