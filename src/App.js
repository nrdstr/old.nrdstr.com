import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
      <Router>
        <div className='app__inner'>
          <TopBar changecolor={changeBorderColor} />
          <Main border={logoBorder} />
          {/* <Route exact path='/' component={() => <Main border={logoBorder} />} /> */}
          {/* <Route path='/:slug' component={() => <Main border={logoBorder} />} /> */}
        </div>
      </Router>
    </div>
  )
}

export default App
