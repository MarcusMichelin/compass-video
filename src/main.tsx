import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
// import PageTemporadas from './pages/PageTemporadas'
import IniciarSessao from './components/Login/IniciarSessao'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IniciarSessao />
  </React.StrictMode>,
)
