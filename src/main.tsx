import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import { GlobalProvider } from './context/globalState'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
