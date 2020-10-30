import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
import Background from './components/Background'
import TopBar from './components/TopBar'
import Modal from './components/Modal'
import NoShow from './components/NoShow'
import Div100vh from 'react-div-100vh'
import MobileMenu from './components/MobileMenu'
import { HelmetProvider } from 'react-helmet-async'
import './App.scss'

function App() {
  const [logoBorder, setLogoBorder] = useState('color-2')
  const changeBorderColor = color => setLogoBorder(color)
  return (
    <HelmetProvider>
      <Div100vh className="app">
        <Background changeColor={changeBorderColor} />
        <Router>
          <div className='app__inner'>
            <TopBar changecolor={changeBorderColor} />
            <Main border={logoBorder} />
            <Modal />
            <MobileMenu />
          </div>
        </Router>
        <NoShow />
      </Div100vh>
    </HelmetProvider>
  )
}

export default App
