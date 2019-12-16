import React from 'react'
import './App.css'
import routes from './routes'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="app-contanier">
      <Header />
      {routes}
    </div>
  )
}

export default App
