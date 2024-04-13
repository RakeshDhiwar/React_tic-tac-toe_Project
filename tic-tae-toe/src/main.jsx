// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //In local development Strictmode "double invoking" is intentional in order to detect any errors in components.
  //In production build produced by npm run build,components are rendered only once as expected
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
   <App />
)
