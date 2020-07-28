import React, { useState } from 'react'
import Logo from './Logo'
import Background from './Background'
import './App.scss'

function App() {
  const [logoBorder, setLogoBorder] = useState('color-1')
  const changeBorderColor = color => setLogoBorder(color)
  return (
    <div className="App">
      <Background changeColor={changeBorderColor} />
      <header className="App-header">
        <Logo border={logoBorder} />
      </header>
    </div>
  )
}

export default App
