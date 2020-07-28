import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { StateProvider, initialState } from "./state"
import { rootReducer } from "./reducers"
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={rootReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
