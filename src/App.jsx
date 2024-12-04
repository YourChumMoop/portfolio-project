import { useState } from 'react'
import {Outlet} from 'react-router-dom'
import NavTabs from './components/NavTabs'
import Footer from './components/Footer'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
