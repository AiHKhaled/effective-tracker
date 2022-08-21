import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { WorkoutsContextProvided } from './context/WorkoutContext'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WorkoutsContextProvided>
        <App />
      </WorkoutsContextProvided>
    </BrowserRouter>
  </React.StrictMode>
)
