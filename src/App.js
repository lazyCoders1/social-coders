import React from 'react'
import './App.scss'
import Routes from './Routes'
import Header from './components/Header/Header'
import "./index.css"

function App() {
  return (
    <div className="app-contanier">
      <Header />
      {Routes}
    </div>
  )
}

export default App
