import React, { useState } from 'react'
import Main from './Main'
import Background from './components/Background'
import TopBar from './components/TopBar'
import './App.scss'

function App() {
  const [logoBorder, setLogoBorder] = useState('color-2')
  const changeBorderColor = color => setLogoBorder(color)
  return (
    <div className="app">
      <Background changeColor={changeBorderColor} />
      <div className='app__inner'>
        <TopBar changecolor={changeBorderColor} />
        <Main border={logoBorder} />
      </div>
    </div>
  )
}

export default App
