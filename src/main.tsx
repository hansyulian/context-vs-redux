import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { scan } from 'react-scan';
import './index.css'
import App from './App.tsx'

// Initialize before the root.render() call
scan({
  enabled: true,
  dangerouslyForceRunInProduction: true, // Required for your GH Pages build
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
