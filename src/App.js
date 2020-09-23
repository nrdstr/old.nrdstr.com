import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
import Background from './components/Background'
import TopBar from './components/TopBar'
import Modal from './components/Modal'
import Div100vh from 'react-div-100vh'
import './App.scss'

function App() {
  const [logoBorder, setLogoBorder] = useState('color-2')
  const changeBorderColor = color => setLogoBorder(color)
  return (
    <Div100vh className="app">
      <Background changeColor={changeBorderColor} />
      <Router>
        <div className='app__inner'>
          <TopBar changecolor={changeBorderColor} />
          <Main border={logoBorder} />
          <Modal />
        </div>
      </Router>
    </Div100vh>
  )
}

export default App
