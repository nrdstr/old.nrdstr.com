import React from 'react'
import Logo from './Logo'
import Background from './Background'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Background />
      <header className="App-header">
        <Logo />
      </header>
    </div>
  )
}

export default App
