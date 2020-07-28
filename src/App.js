import React, { useState } from 'react'
import Main from './Main'
import Background from './Background'
import TopBar from './TopBar'
import './App.scss'

function App() {
  const [logoBorder, setLogoBorder] = useState('color-2')
  const changeBorderColor = color => setLogoBorder(color)
  return (
    <div className="App">
      <div className='app__inner'>
        <Background changeColor={changeBorderColor} />
        <TopBar changecolor={changeBorderColor} />
        <header className="App-header">
          <Main border={logoBorder} />
        </header>
      </div>
    </div>
  )
}

export default App
