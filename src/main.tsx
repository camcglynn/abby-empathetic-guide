
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'

// Log loading for debugging
console.log('Application initializing...')

createRoot(document.getElementById("root")!).render(<App />);
