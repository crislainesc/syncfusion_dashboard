import React from 'react'
import { createRoot } from 'react-dom/client'

import { ContextProvider } from './contexts/ContextProvider'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
