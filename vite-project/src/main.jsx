import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CountrySelect from './country_select.jsx'
import GlobeApp from 'globe settings/src/App.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CountrySelect />
    <GlobeApp />
  </StrictMode>,
)
