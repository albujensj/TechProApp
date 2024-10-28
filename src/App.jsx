import { useState } from 'react'
import './App.css'
import Header from './componentes/Header'
import Services from './componentes/Services'
import About from './componentes/About'
import Products from './componentes/Products'
import Info from './componentes/Info'

function App() {
  return (
    <>
      <Header/>
      <Services/>
      <About/>
      <Products/>
      <Info/>
    </>
  )
}

export default App;
